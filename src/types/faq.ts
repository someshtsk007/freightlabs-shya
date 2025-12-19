export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  subcategory?: string;
  tags: string[];
  isFeatured: boolean;
}

export type FAQCategory =
  | 'general'
  | 'shipper'
  | '3pl-broker'
  | 'carrier'
  | 'platform'
  | 'support';

export interface FAQCategoryInfo {
  id: FAQCategory;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}
