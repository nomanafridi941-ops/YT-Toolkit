
export enum ToolCategory {
  SEO = 'SEO Tools',
  Thumbnails = 'Thumbnail Tools',
  Shorts = 'Shorts Tools',
  Calculators = 'Calculators',
  Utility = 'Utility Tools'
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: ToolCategory;
  icon: string;
  seoTitle: string;
  seoDescription: string;
  howToUse: string[];
  faqs: { question: string; answer: string }[];
  type: 'template' | 'calculator' | 'utility' | 'ai';
}
