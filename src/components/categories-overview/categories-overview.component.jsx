import CategoryCard from '../category-card/category-card.component';

import { SubHeading, CardListItemMD } from './categories-overview.styles';
const CategoriesOverview = () => {
  const getCategoryCard = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
      return <CategoryCard />;
    });
  };
  return (
    <div>
      <SubHeading>Trending</SubHeading>
      <CardListItemMD>{getCategoryCard()}</CardListItemMD>

      <SubHeading>New Posts</SubHeading>
      <CardListItemMD>{getCategoryCard()}</CardListItemMD>
    </div>
  );
};

export default CategoriesOverview;
