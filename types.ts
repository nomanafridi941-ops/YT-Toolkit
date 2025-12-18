
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
  longDescription: string; // New field for SEO content
  category: ToolCategory;
  icon: string;
  seoTitle: string;
  seoDescription: string;
  howToUse: string[];
  faqs: { question: string; answer: string }[];
  type: 'ai' | 'calculator' | 'utility';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}
