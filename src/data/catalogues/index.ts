import { CatalogueCategoryConfig } from '../../types/catalogue';
import { wardrobeCatalogueData } from './wardrobeData';
import { modularKitchenCatalogueData } from './modularKitchenData';
import { bedsCatalogueData } from './bedsData';
import { tvUnitsCatalogueData } from './tvUnitsData';
import { barCounterCatalogueData } from './barCounterData';
import { templeSpaceCatalogueData } from './templeSpaceData';
import { crockeryUnitCatalogueData } from './crockeryUnitData';
import { popCatalogueData } from './popData';

export const allCatalogues: Record<string, CatalogueCategoryConfig> = {
  'wardrobe': wardrobeCatalogueData,
  'modular-kitchen': modularKitchenCatalogueData,
  'beds': bedsCatalogueData,
  'tv-units': tvUnitsCatalogueData,
  'bar-counter': barCounterCatalogueData,
  'temple-space': templeSpaceCatalogueData,
  'crockery-unit': crockeryUnitCatalogueData,
  'pop': popCatalogueData,
};

export interface CatalogueCategoryMeta {
  id: string;
  name: string;
  config: CatalogueCategoryConfig;
  count: number;
}

export const catalogueCategoryList: CatalogueCategoryMeta[] = [
  { id: 'wardrobe', name: 'Wardrobe', config: wardrobeCatalogueData, count: wardrobeCatalogueData.items.length },
  { id: 'modular-kitchen', name: 'Modular Kitchen', config: modularKitchenCatalogueData, count: modularKitchenCatalogueData.items.length },
  { id: 'beds', name: 'Beds', config: bedsCatalogueData, count: bedsCatalogueData.items.length },
  { id: 'tv-units', name: 'TV Units', config: tvUnitsCatalogueData, count: tvUnitsCatalogueData.items.length },
  { id: 'bar-counter', name: 'Bar Counter – Residential', config: barCounterCatalogueData, count: barCounterCatalogueData.items.length },
  { id: 'temple-space', name: 'Temple Space', config: templeSpaceCatalogueData, count: templeSpaceCatalogueData.items.length },
  { id: 'crockery-unit', name: 'Crockery Unit', config: crockeryUnitCatalogueData, count: crockeryUnitCatalogueData.items.length },
  { id: 'pop', name: 'POP', config: popCatalogueData, count: popCatalogueData.items.length },
];

export const defaultCatalogueId = 'wardrobe';
