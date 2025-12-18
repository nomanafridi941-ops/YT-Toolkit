
import { GoogleGenAI } from "@google/genai";

export const generateWithAI = async (prompt: string, systemInstruction: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  const modelName = 'gemini-3-flash-preview';

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while generating content. Please try again.";
  }
};

export const getAIPromptForTool = (toolId: string, input: string) => {
  switch (toolId) {
    case 'title-generator':
      return {
        prompt: `Generate 10 viral YouTube titles for: "${input}". Focus on high-CTR and SEO.`,
        system: "Expert YouTube strategist."
      };
    case 'description-generator':
      return {
        prompt: `Write a professional YouTube description for: "${input}". Include SEO keywords and timestamps.`,
        system: "Expert YouTube SEO copywriter."
      };
    case 'tag-generator':
      return {
        prompt: `Generate 20 high-ranking tags for: "${input}". Comma separated.`,
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
        prompt: `Audit this metadata for SEO score and improvements: "${input}".`,
        system: "YouTube SEO Auditor."
      };
    case 'shorts-ideas':
    case 'video-idea-generator':
      return {
        prompt: `Generate 5 viral content ideas for: "${input}".`,
        system: "Viral content ideation expert."
      };
    case 'shorts-script':
    case 'script-generator':
      return {
        prompt: `Write a high-retention script for: "${input}".`,
        system: "Professional Scriptwriter."
      };
    case 'channel-name-generator':
      return {
        prompt: `Generate 15 creative channel names for: "${input}".`,
        system: "Branding consultant."
      };
    case 'keyword-research':
      return {
        prompt: `Find low competition keywords for: "${input}".`,
        system: "SEO Keyword Analyst."
      };
    case 'timestamp-generator':
      return {
        prompt: `Create a timestamp list for a video about: "${input}".`,
        system: "Video Editor Assistant."
      };
    case 'playlist-generator':
      return {
        prompt: `Plan a sequence of 5 video titles for a playlist about: "${input}".`,
        system: "Channel Growth Specialist."
      };
    case 'bio-generator':
      return {
        prompt: `Write an engaging YouTube channel 'About' bio for: "${input}".`,
        system: "Brand Copywriter."
      };
    case 'pinned-comment-generator':
      return {
        prompt: `Generate 3 engagement-boosting pinned comments for a video about: "${input}".`,
        system: "Community Manager."
      };
    case 'competitor-analyst':
      return {
        prompt: `Analyze content strategy for channels in the "${input}" niche.`,
        system: "Competitive Strategy Analyst."
      };
    case 'tag-extractor':
      return {
        prompt: `Extract relevant SEO keywords and tags from this text: "${input}".`,
        system: "SEO Automation Specialist."
      };
    case 'thumbnail-text-generator':
      return {
        prompt: `Generate 5 punchy, short text overlays for a thumbnail about: "${input}". Max 3 words each.`,
        system: "Thumbnail Design Strategist."
      };
    case 'hook-generator':
      return {
        prompt: `Write 5 scroll-stopping hooks for a video about: "${input}".`,
        system: "Retention Specialist."
      };
    case 'retention-tips':
      return {
        prompt: `Provide 5 advanced editing and structure tips to improve retention for: "${input}".`,
        system: "Audience Retention Analyst."
      };
    case 'channel-analytics-viewer':
      return {
        prompt: `Based on the niche "${input}", what are the standard performance benchmarks and growth strategies?`,
        system: "Channel Growth Consultant."
      };
    default:
      return {
        prompt: input,
        system: "Helpful YouTube assistant."
      };
  }
};
