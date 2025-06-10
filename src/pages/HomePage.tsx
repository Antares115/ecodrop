
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import { searchItems, categories } from '@/data/items';
import { toast } from '@/components/ui/sonner';

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchItems>>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    const results = searchItems(query);
    setSearchResults(results);
    setHasSearched(true);
    
    if (results.length === 0) {
      toast.info("No items found. Try a different search term or browse categories.");
    } else if (results.length === 1) {
      // If only one result, go directly to that item
      navigate(`/items/${results[0].id}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <section className="text-center mb-8 animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-eco-dark mb-2">EcoDrop</h1>
          <p className="text-gray-600">Find the right way to dispose of tricky items</p>
        </div>
        
        <SearchBar onSearch={handleSearch} />
      </section>

      {hasSearched && searchResults.length > 1 && (
        <section className="mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4 text-eco-dark">Search Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {searchResults.map(item => (
              <div 
                key={item.id} 
                className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/items/${item.id}`)}
              >
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-8 animate-fade-in">
        <h2 className="text-xl font-semibold mb-4 text-eco-dark">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              title={category.title}
              icon={category.icon}
              color={category.color}
              path={`/items?category=${category.id}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
