export interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: Date;
}

export interface Topic {
  id?: string;
  name: {
    en: string;
    pt: string;
  };
  description?: {
    en: string;
    pt?: string;
  };
  slug?: string;
}
