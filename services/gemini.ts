
import { GoogleGenAI } from "@google/genai";

/**
 * Streaming version of AI generation for better perceived performance.
 */
export async function* generateWithAIStream(prompt: string, systemInstruction: string) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    yield "Error: API Key not found. Please ensure it is configured in the environment.";
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
  // Normalize input to prevent empty prompts
  const cleanInput = input.trim() || "YouTube growth";

  switch (toolId) {
    case 'title-generator':
      return {
        prompt: `Generate 10 viral YouTube titles for: "${cleanInput}". Focus on high-CTR and SEO. Format as a clean numbered list.`,
        system: "You are an expert YouTube growth strategist who knows how to trigger curiosity gaps."
      };
    case 'description-generator':
      return {
        prompt: `Write a professional YouTube description for: "${cleanInput}". Include SEO keywords, a summary, social link placeholders, and 5 potential hashtags.`,
        system: "You are an expert YouTube SEO copywriter."
      };
    case 'tag-generator':
      return {
        prompt: `Generate 20 high-ranking tags for: "${cleanInput}". Provide them as a single comma-separated list.`,
        system: "You are an SEO specialist focused on YouTube metadata."
      };
    case 'hashtag-generator':
    case 'shorts-hashtags':
      return {
        prompt: `Generate 15 trending hashtags for: "${cleanInput}" starting with #.`,
        system: "You are a social media trend expert."
      };
    case 'seo-checker':
      return {
        prompt: `Audit this metadata for SEO score and improvements: "${cleanInput}". Provide a score out of 100 and 5 specific actionable tips for better ranking.`,
        system: "You are a YouTube SEO Auditor."
      };
    case 'shorts-ideas':
    case 'video-idea-generator':
      return {
        prompt: `Generate 5 viral content ideas for: "${cleanInput}". For each, give a catchy title and a brief 1-sentence explanation of why it works.`,
        system: "You are a viral content ideation expert for YouTube and TikTok."
      };
    case 'shorts-script':
    case 'script-generator':
      return {
        prompt: `Write a high-retention script for a 60-second video about: "${cleanInput}". Include [Visual] cues and [Spoken] dialogue.`,
        system: "You are a professional scriptwriter for top-tier creators."
      };
    case 'channel-name-generator':
      return {
        prompt: `Generate 15 creative, memorable YouTube channel names for: "${cleanInput}". Group them into 'Professional', 'Quirky', and 'Short' categories.`,
        system: "You are a branding and naming consultant."
      };
    case 'keyword-research':
      return {
        prompt: `Find 10 low-competition, high-volume keywords for the niche: "${cleanInput}". List their potential reach.`,
        system: "You are an SEO Keyword Analyst for YouTube Search."
      };
    case 'timestamp-generator':
      return {
        prompt: `Create a logical timestamp list for a video titled: "${cleanInput}". Use the format 00:00 - Introduction, etc.`,
        system: "You are a video structuring assistant."
      };
    case 'playlist-generator':
      return {
        prompt: `Plan a series of 5 video titles that work together in a playlist titled: "${cleanInput}".`,
        system: "You are a channel growth specialist focused on session duration."
      };
    case 'bio-generator':
      return {
        prompt: `Write an engaging, SEO-optimized YouTube channel 'About' bio for: "${cleanInput}". Include a call to action.`,
        system: "You are a professional brand storyteller."
      };
    case 'pinned-comment-generator':
      return {
        prompt: `Generate 3 engagement-boosting pinned comments that ask questions and drive discussion for: "${cleanInput}".`,
        system: "You are a community engagement expert."
      };
    case 'competitor-analyst':
      return {
        prompt: `Analyze the current landscape, top players, and missing content gaps for the "${cleanInput}" niche.`,
        system: "You are a competitive strategy analyst."
      };
    case 'tag-extractor':
      return {
        prompt: `Extract the 15 most valuable SEO keywords and tags from the following text: "${cleanInput}".`,
        system: "You are an SEO meta-data specialist."
      };
    case 'thumbnail-text-generator':
      return {
        prompt: `Generate 5 short, bold text overlays for a thumbnail about: "${cleanInput}". Use high-impact power words. Max 3 words per idea.`,
        system: "You are a graphic design strategist for thumbnails."
      };
    case 'hook-generator':
      return {
        prompt: `Write 5 scroll-stopping hooks (first 3 seconds) for a video about: "${cleanInput}". Focus on different angles (Fear, Curiosity, Benefit).`,
        system: "You are an audience retention specialist."
      };
    case 'retention-tips':
      return {
        prompt: `Provide 5 advanced production and editing tips to improve audience retention for: "${cleanInput}".`,
        system: "You are a senior video retention analyst."
      };
    case 'channel-analytics-viewer':
      return {
        prompt: `Describe the key performance indicators (KPIs) and benchmarks a creator should aim for in the "${cleanInput}" niche.`,
        system: "You are a YouTube growth consultant."
      };
    default:
      return {
        prompt: `Provide detailed YouTube creator advice, strategic tips, and content suggestions for: "${cleanInput}".`,
        system: "You are a professional YouTube Assistant helping creators grow their channels."
      };
  }
};
