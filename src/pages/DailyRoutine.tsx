import React, { useState, useEffect } from 'react';
import { Sun, Moon, Layers, Clock, Droplet, Repeat, AlertCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import TipCard from '../components/TipCard';
import ProductCard from '../components/ProductCard';
import { useSkinAssessment } from '../contexts/SkinAssessmentContext';

export const DailyRoutine: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showRoutines, setShowRoutines] = useState(false);
  const { recommendedProducts, selectedProducts: recommendedSelectedProducts, answers } = useSkinAssessment();
  const location = useLocation();
  const [isFromAssessment, setIsFromAssessment] = useState(false);

  useEffect(() => {
    setIsFromAssessment(location.state?.fromAssessment || false);
    if (location.state?.fromAssessment) {
      setSelectedProducts(recommendedSelectedProducts);
      setShowRoutines(true);
    }
  }, [location, recommendedSelectedProducts]);

  const routineTips = [
    { icon: Layers, title: "Layer Products", description: "Apply products from thinnest to thickest consistency." },
    { icon: Clock, title: "Timing Matters", description: "Wait about 1 minute between each step for better absorption." },
    { icon: Droplet, title: "Patch Test", description: "Always patch test new products before adding them to your routine." },
    { icon: Repeat, title: "Consistency is Key", description: "Stick to your routine for best results!" }
  ];

  const generateRoutine = (products: string[]) => {
    const morningProducts = products.slice(0, Math.ceil(products.length / 2));
    const eveningProducts = products.slice(Math.ceil(products.length / 2));

    return {
      morning: morningProducts.map((product, index) => ({
        id: index + 1,
        step: `Step ${index + 1}`,
        product: product,
        time: "1-2 minutes"
      })),
      evening: eveningProducts.map((product, index) => ({
        id: index + 1,
        step: `Step ${index + 1}`,
        product: product,
        time: "1-2 minutes"
      }))
    };
  };

  const routines = generateRoutine(selectedProducts);

  const standardRoutineProducts = [
    {
      name: "Gentle Cleanser",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "A mild, soap-free cleanser suitable for all skin types.",
      benefits: "Removes impurities without stripping the skin's natural oils.",
      monthlyPrice: 20,
      importance: "High"
    },
    {
      name: "Hydrating Moisturizer",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "A lightweight, non-greasy moisturizer to keep skin hydrated.",
      benefits: "Improves skin hydration, softness, and overall appearance.",
      monthlyPrice: 25,
      importance: "High"
    },
    {
      name: "Broad Spectrum Sunscreen",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "A daily sunscreen with at least SPF 30 for sun protection.",
      benefits: "Protects against UV damage, prevents premature aging and skin cancer.",
      monthlyPrice: 30,
      importance: "High"
    }
  ];

  const RoutineList: React.FC<{ routine: any[]; icon: React.ReactNode }> = ({ routine, icon }) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        {icon}
        <span className="ml-2">{icon === <Sun /> ? "Morning" : "Evening"} Routine</span>
      </h2>
      <ul className="space-y-4">
        {routine.map((item) => (
          <li key={item.id} className="flex items-start">
            <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full text-indigo-800 font-semibold mr-4">
              {item.id}
            </span>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{item.step}</h3>
              <p className="text-gray-600">{item.product}</p>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const handleAddToRoutine = (productName: string) => {
    setSelectedProducts(prevSelected => 
      prevSelected.includes(productName)
        ? prevSelected.filter(name => name !== productName)
        : [...prevSelected, productName]
    );
  };

  const handleGenerateRoutine = () => {
    setShowRoutines(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Daily Skincare Routine</h1>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Daily Routine Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {routineTips.map((tip, index) => (
          <TipCard key={index} icon={tip.icon} title={tip.title} description={tip.description} />
        ))}
      </div>

      {isFromAssessment ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assessment Answers</h2>
          <ul className="space-y-2">
            {Object.entries(answers).map(([key, value]) => (
              <li key={key} className="text-gray-700">
                <span className="font-medium">{key}:</span> {value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-indigo-100 rounded-lg p-6 mb-12 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Skin care"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Want a more effective, personalized skincare routine?</h2>
            <p className="text-lg text-indigo-700 mb-4">Take our Skin Assessment to get tailored recommendations for your unique skin type and concerns.</p>
            <Link
              to="/skin-assessment"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start Your Skin Assessment
            </Link>
          </div>
        </div>
      )}
      
      {isFromAssessment ? (
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Recommended and Selected Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts
              .filter(product => recommendedSelectedProducts.includes(product.name))
              .map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product} 
                  hideRecommendation={true} 
                  buttonText="Buy in Store"
                  isSelected={true}
                  onAddToRoutine={() => handleAddToRoutine(product.name)}
                />
              ))
            }
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Standard Routine Suggested Products</h2>
            <div className="flex items-center">
              <p className="text-sm text-gray-600 mr-4">Select the products you want to include in your routine and click "Generate Routine" button.</p>
              <button
                onClick={handleGenerateRoutine}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Generate Routine
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {standardRoutineProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                hideRecommendation={true} 
                buttonText="Buy in Store"
                isSelected={selectedProducts.includes(product.name)}
                onAddToRoutine={() => handleAddToRoutine(product.name)}
              />
            ))}
          </div>
        </>
      )}
      
      {showRoutines && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Routines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RoutineList routine={routines.morning} icon={<Sun className="w-6 h-6 text-yellow-500" />} />
            <RoutineList routine={routines.evening} icon={<Moon className="w-6 h-6 text-indigo-500" />} />
          </div>
        </>
      )}
    </div>
  );
};

export default DailyRoutine;