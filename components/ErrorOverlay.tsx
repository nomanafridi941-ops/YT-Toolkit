import React, { useEffect, useState } from 'react';

const ErrorOverlay: React.FC = () => {
  const [error, setError] = useState<null | { message: string; stack?: string }>(null);

  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      setError({ message: event.message, stack: event.error?.stack });
    };
    const onUnhandled = (ev: PromiseRejectionEvent) => {
      const reason = ev.reason;
      setError({ message: typeof reason === 'string' ? reason : reason?.message || 'Unhandled promise rejection', stack: reason?.stack });
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onUnhandled);

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onUnhandled);
    };
  }, []);

  if (!error) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(2,6,23,0.85)', color: '#fff', zIndex: 9999, padding: 24, overflow: 'auto' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>Runtime Error Detected</h2>
        <pre style={{ whiteSpace: 'pre-wrap', background: 'rgba(255,255,255,0.06)', padding: 12, borderRadius: 8 }}>{error.message}</pre>
        {error.stack && (
          <details style={{ marginTop: 12, background: 'rgba(255,255,255,0.03)', padding: 12, borderRadius: 6 }}>
            <summary style={{ cursor: 'pointer' }}>Stack trace</summary>
            <pre style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{error.stack}</pre>
          </details>
        )}
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button onClick={() => location.reload()} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}>Reload</button>
          <button onClick={() => setError(null)} style={{ background: '#111827', color: '#fff', border: '1px solid rgba(255,255,255,0.06)', padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}>Dismiss</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorOverlay;
