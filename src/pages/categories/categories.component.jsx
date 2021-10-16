import { Route } from 'react-router-dom';

import CategoriesOverview from '../../components/categories-overview/categories-overview.component';
import CategoryPage from '../category/category.component';

const CatogoriesPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CategoriesOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default CatogoriesPage;
