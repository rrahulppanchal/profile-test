import { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import React from 'react';
import Layout from '../Components/Layout/MainLayout';

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  if (isAuthenticated)
    return (
      <Layout>
        <Component />
      </Layout>
    );

  return <Navigate to="/login" />;
};

export default PrivateRoute;
