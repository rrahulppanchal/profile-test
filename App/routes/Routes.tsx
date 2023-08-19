import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './ProtectedRoutes';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Layout from '../Components/Layout/MainLayout';
import Home from '../Pages/Home/Home';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<h1>login</h1>} />
        <Route
          path="/new"
          element={
            <Layout>
              <h1>new login</h1>
            </Layout>
          }
        />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route path="*" element={<>No page</>} />
      </Routes>
    </>
  );
}

export default Router;
