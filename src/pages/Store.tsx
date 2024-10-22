import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

export const Store: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Gentle Foaming Cleanser",
      description: "A pH-balanced cleanser suitable for all skin types.",
      price: 24.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "Hydrating Toner",
      description: "Alcohol-free toner with hyaluronic acid for deep hydration.",
      price: 19.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Vitamin C Serum",
      description: "Brightening serum with 20% L-Ascorbic Acid and Ferulic Acid.",
      price: 59.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 4,
      name: "Niacinamide Moisturizer",
      description: "Oil-free moisturizer with 5% Niacinamide for pore refinement.",
      price: 34.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">SkinScience Store</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-indigo-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Personalized Recommendations</h2>
        <p className="text-indigo-800 mb-4">Based on your skin assessment, we recommend the following products for your routine:</p>
        <ul className="list-disc list-inside space-y-2 text-indigo-700">
          <li>Gentle Foaming Cleanser</li>
          <li>Vitamin C Serum</li>
          <li>Niacinamide Moisturizer</li>
        </ul>
        <a href="/skin-assessment" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
          Update your skin assessment →
        </a>
      </div>
    </div>
  );
};