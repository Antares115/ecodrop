import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { items, getItemsByCategory, categories } from '@/data/items';
import ItemCard from '@/components/ItemCard';

const ItemsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category');
  const [displayItems, setDisplayItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categoryId) {
      setDisplayItems(getItemsByCategory(categoryId));
      setActiveCategory(categoryId);
    } else {
      setDisplayItems(items);
      setActiveCategory(null);
    }
  }, [categoryId]);

  const filterByCategory = (id: string) => {
    if (id === activeCategory) {
      // If clicking the active category, show all items
      setDisplayItems(items);
      setActiveCategory(null);
    } else {
      // Otherwise filter by the selected category
      setDisplayItems(getItemsByCategory(id));
      setActiveCategory(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-eco-dark">Recyclable Items</h1>
      
      <div className="flex overflow-x-auto gap-2 pb-4 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => filterByCategory(category.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeCategory === category.id
                ? 'bg-eco-primary text-white'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map(item => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            difficulty={item.difficulty}
          />
        ))}
      </div>
      
      {displayItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ItemsPage;
