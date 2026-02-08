# YT Toolkit Pro Conversion Tracking Setup

## Google Ads
- Add Google Ads Conversion Tag to <head> or via Google Tag Manager
- Track: Email signups, tool usage, CTA clicks

## Meta Pixel (Facebook/Instagram)
- Add Meta Pixel to <head>
- Track: Page views, conversions (email, tool usage)

## TikTok Pixel
- Add TikTok Pixel to <head>
- Track: Landing page actions

## Google Analytics
- Already set up (gtag.js)
- Set up custom events: “Tool Used”, “Email Captured”, “CTA Clicked”

## Example (Google Ads Tag)
```
<!-- Google Ads Conversion Tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX');
  gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/abc123'});
</script>
```

## Example (Meta Pixel)
```
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'XXXXXXXXXXXXXXX');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXX&ev=PageView&noscript=1"
/></noscript>
```
