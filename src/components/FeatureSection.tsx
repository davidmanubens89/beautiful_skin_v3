import React from 'react';

const FeatureSection: React.FC = () => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FeatureItem
        title="Tell us about you"
        description="Every skin is unique and deserves a unique treatment. Let us know about your type of skin and goals."
        imageSrc="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        imageAlt="Close-up of face"
      />
      <FeatureItem
        title="Personalized Assessment"
        description="Get a customized skincare routine based on your unique skin profile and concerns."
        imageSrc="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        imageAlt="Skincare products"
        reverse
      />
      <FeatureItem
        title="Set routines and track progress"
        description="Set your skin care routines and start to track progress of how your skin improves over time."
        imageSrc={[
          "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
          "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        ]}
        imageAlt="Skin close-up"
        multipleImages
      />
    </div>
  </div>
);

interface FeatureItemProps {
  title: string;
  description: string;
  imageSrc: string | string[];
  imageAlt: string;
  reverse?: boolean;
  multipleImages?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, imageSrc, imageAlt, reverse, multipleImages }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className={reverse ? 'order-2 md:order-1' : ''}>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
    <div className={reverse ? 'order-1 md:order-2' : ''}>
      {multipleImages ? (
        <div className="grid grid-cols-3 gap-4">
          {(imageSrc as string[]).map((src, index) => (
            <img key={index} src={src} alt={`${imageAlt} ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
          ))}
        </div>
      ) : (
        <img src={imageSrc as string} alt={imageAlt} className="w-full h-64 object-cover rounded-lg" />
      )}
    </div>
  </div>
);

export default FeatureSection;