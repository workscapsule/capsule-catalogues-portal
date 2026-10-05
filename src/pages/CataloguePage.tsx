import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { allCatalogues, defaultCatalogueId, catalogueCategoryList } from '../data/catalogues';
import { CatalogueViewer } from '../components/catalogue/CatalogueViewer';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';

export const CataloguePage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  // Normalize category or fallback to default (wardrobe)
  const currentCatId = category && allCatalogues[category] ? category : defaultCatalogueId;
  const activeConfig = allCatalogues[currentCatId] || allCatalogues[defaultCatalogueId];

  const handleSelectCategory = (catId: string) => {
    navigate(`/catalogue/${catId}`);
  };

  return (
    <div className="w-full">
      {/* Subtle back link bar */}
      <div className="no-print bg-[#0D0E11] border-b border-white/10 px-4 sm:px-8 py-2.5 flex items-center justify-between text-xs text-neutral-400">
        <Link
          to="/"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Capsule Website</span>
        </Link>

        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-1.5 text-neutral-400">
            <Layers className="w-3.5 h-3.5 text-brand-copper" />
            <span>8 Standalone Catalogues • 230 Design Items</span>
          </span>
          <span className="flex items-center gap-1.5 text-brand-copperLight font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{activeConfig.name} ({activeConfig.items.length} Designs)</span>
          </span>
        </div>
      </div>

      <CatalogueViewer
        config={activeConfig}
        onSelectCategory={handleSelectCategory}
      />
    </div>
  );
};

export default CataloguePage;
