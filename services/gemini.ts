
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

/**
 * Streaming version of AI generation for better perceived performance.
 */
export async function* generateWithAIStream(prompt: string, systemInstruction: string) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    yield "Error: API Key not found. Please ensure it is configured.";
    return;
  }

  const ai = new GoogleGenAI({ apiKey });
  const modelName = 'gemini-3-flash-preview';

  try {
    const result = await ai.models.generateContentStream({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    for await (const chunk of result) {
      const text = chunk.text;
      if (text) yield text;
    }
  } catch (error) {
    console.error("Gemini Streaming Error:", error);
    yield "Sorry, I encountered an error while generating your request. Please try again in a few seconds.";
  }
}

export const getAIPromptForTool = (toolId: string, input: string) => {
  switch (toolId) {
    case 'title-generator':
      return {
        prompt: `Generate 10 viral YouTube titles for: "${input}". Focus on high-CTR and SEO. Format as a clean numbered list.`,
        system: "Expert YouTube strategist."
      };
    case 'description-generator':
      return {
        prompt: `Write a professional YouTube description for: "${input}". Include SEO keywords, timestamps, and social links placeholder.`,
        system: "Expert YouTube SEO copywriter."
      };
    case 'tag-generator':
      return {
        prompt: `Generate 20 high-ranking tags for: "${input}". Provide as a comma-separated list.`,
        system: "SEO Specialist."
      };
    case 'hashtag-generator':
    case 'shorts-hashtags':
      return {
        prompt: `Generate 15 trending hashtags for: "${input}".`,
        system: "Social Media Manager."
      };
    case 'seo-checker':
      return {
        prompt: `Audit this metadata for SEO score and improvements: "${input}". Provide a score out of 100 and 5 specific actionable tips.`,
        system: "YouTube SEO Auditor."
      };
    case 'shorts-ideas':
    case 'video-idea-generator':
      return {
        prompt: `Generate 5 viral content ideas for: "${input}". Briefly explain why each one could go viral.`,
        system: "Viral content ideation expert."
      };
    case 'shorts-script':
    case 'script-generator':
      return {
        prompt: `Write a high-retention script for: "${input}". Include visual cues (VFX) and spoken dialogue.`,
        system: "Professional Scriptwriter."
      };
    case 'channel-name-generator':
      return {
        prompt: `Generate 15 creative channel names for: "${input}". Categories them by style (e.g. Minimalist, Brandable).`,
        system: "Branding consultant."
      };
    case 'keyword-research':
      return {
        prompt: `Find 10 low competition keywords and their search intent for: "${input}".`,
        system: "SEO Keyword Analyst."
      };
    case 'timestamp-generator':
      return {
        prompt: `Create a timestamp list for a video about: "${input}". Format as MM:SS - Chapter Title.`,
        system: "Video Editor Assistant."
      };
    case 'playlist-generator':
      return {
        prompt: `Plan a sequence of 5 video titles for a playlist series about: "${input}".`,
        system: "Channel Growth Specialist."
      };
    case 'bio-generator':
      return {
        prompt: `Write an engaging YouTube channel 'About' bio for: "${input}".`,
        system: "Brand Copywriter."
      };
    case 'pinned-comment-generator':
      return {
        prompt: `Generate 3 engagement-boosting pinned comments for: "${input}".`,
        system: "Community Manager."
      };
    case 'competitor-analyst':
      return {
        prompt: `Analyze the strategy and top performing content types for the "${input}" niche.`,
        system: "Competitive Strategy Analyst."
      };
    case 'tag-extractor':
      return {
        prompt: `Extract relevant SEO keywords and tags from this text: "${input}". List them clearly.`,
        system: "SEO Specialist."
      };
    case 'thumbnail-text-generator':
      return {
        prompt: `Generate 5 short text overlays for a thumbnail about: "${input}". Max 3 words each.`,
        system: "Thumbnail Design Strategist."
      };
    case 'hook-generator':
      return {
        prompt: `Write 5 scroll-stopping hooks (first 3 seconds) for a video about: "${input}".`,
        system: "Retention Specialist."
      };
    case 'retention-tips':
      return {
        prompt: `Provide 5 advanced tips to improve audience retention for: "${input}".`,
        system: "Retention Analyst."
      };
    case 'channel-analytics-viewer':
      return {
        prompt: `Based on the niche "${input}", what are the expected benchmarks and growth strategies?`,
        system: "Growth Consultant."
      };
    default:
      return {
        prompt: `Provide detailed YouTube creator advice, tips, and suggestions for: "${input}".`,
        system: "Professional YouTube Assistant."
      };
  }
};
