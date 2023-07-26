import React from 'react'
import { Switch, Route, Routes } from 'react-router-dom'
import '../../assets/css/paper-dashboard.css';
import '../../assets/css/demo.css';
import { Sidebar } from './Sidebar';
import TopNavbar from './TopNavbar'
import { MainDashboard } from '../../components/dashboard/MainDashboard';
import { ProductContainer } from '../../components/product/ProductContainer';
import { FormDataSample } from '../../sampleForms/FormDataSample';
import { ProductDetails } from '../../components/product/ProductDetails';
import FormikSample from '../../sampleForms/FormikSample';
import { ReactHookForm } from '../../sampleForms/ReactHookForm';
import { PageNotFount } from '../../components/page-not-found/PageNotFount';
import { Login } from '../../components/auth/Login';
import { CategoryList } from '../../components/category/CategoryList';
import { UserPost } from '../../components/post/UserPost';

export const AdminLayout = () => {
  return (
    <>
      <div class="wrapper">
        <Sidebar />
        <div class="main-panel">
          <TopNavbar />
          <div className="content">
            <Routes>
              <Route path="/" Component={MainDashboard} />
              <Route path="/category" Component={CategoryList} />
              <Route path="/products" Component={ProductContainer} />
              <Route path="/UserPost" Component={UserPost} />
              <Route path="/products/:id" Component={ProductDetails} />
              <Route path="/products/info" Component={ProductDetails} />
              <Route path='/formdata' Component={FormDataSample} />
              <Route path='/react-hook-form' Component={ReactHookForm} />
              <Route path='/formik-sample' Component={FormikSample} />
              <Route path='/login' Component={Login} />
              <Route path="*" Component={PageNotFount} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
