import FeaturedPosts from '../components/content-modules/featured-posts';
import LandingPageImage from '../components/content-modules/LandingPageImage';
import LandingPageGallery from '../components/content-modules/LandingPageGallery';
import React from 'react';

const componentsMap = {
  landingPageImage: LandingPageImage,
  landingPageFeaturedPosts: FeaturedPosts,
  gallery: LandingPageGallery,
};
export const getLandingPageModule = (module, index) => {
  console.log(module);
  const Component = componentsMap[module.sys.contentType.sys.id];
  if (Component) {
    return <Component data={module} key={index} />;
  }
  return null;
};

export default getLandingPageModule;
