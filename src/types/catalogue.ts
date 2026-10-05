export interface CatalogueDesignItem {
  id: string; // e.g. 'ward-01'
  refId: string; // e.g. 'WARD-01'
  name: string; // e.g. 'AURORA'
  category: string; // e.g. 'WARDROBE'
  image: string; // image url/path
  description: string; // 2-4 lines concise design description
  moodTags?: string; // e.g. 'Contemporary • High-Gloss • Refined'
  pageNumber: string; // e.g. 'P/01'
}

export interface CatalogueCategoryConfig {
  id: string;
  name: string;
  codePrefix: string;
  categoryEyebrow: string;
  coverTitle: string;
  coverSubtitle: string;
  editionYear: string;
  items: CatalogueDesignItem[];
}
