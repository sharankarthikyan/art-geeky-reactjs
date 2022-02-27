import React from "react";
import { Route } from 'react-router-dom';

import WriteOverview from '../../components/write-overview/write-overview.component';
import Editor from '../../components/editor/main-section/editor.component';

const Write = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={WriteOverview} />
      <Route path={`${match.path}/:user/:articleId`} component={Editor} />
    </div>
  );
};

export default Write;
