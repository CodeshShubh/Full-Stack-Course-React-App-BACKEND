import React, { useEffect } from 'react';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';

// Admin Dashboard Routes import

import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';

// After Api Implimentation imports
import { useDispatch, useSelector } from 'react-redux'; 
import toast,{Toaster} from 'react-hot-toast';  
import { loadUser } from './redux/actions/user';
import {ProtectedRoute} from 'protected-route-react'


function App() {
  const {isAuthenticated,user, error, message} =useSelector(state=>state.user) // it is take from reducer initial stage
      const dispatch = useDispatch();  // After api

    useEffect(()=>{                   // After api
         if(error){
          toast.error(error);
           dispatch({type:'clearError'});
         }
         if(message){
          toast.success(message);
          dispatch({type:'clearMessage'})
         }
    },[dispatch, error, message])

    useEffect(()=>{               //after api
        dispatch(loadUser())
    },[dispatch])

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Course/:id' element={<CoursePage/> }/>
        <Route path='/Contact' element={<Contact/> }/>
        <Route path='/request' element={<Request/> }/>
            {/* used protected route for if user already login and profile button show */}
        <Route path='/profile' element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Profile/>
        </ProtectedRoute> }/>

        <Route path='/changepassword' element={<ChangePassword/> }/>
        <Route path='/updateprofile' element={<UpdateProfile/> }/>
        <Route path='/about' element={<About/> }/>
                  
                  {/* if user login is already login then redirect profile page */}
        <Route path='/login' element={
        <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
          <Login/>
        </ProtectedRoute>} />
        
             {/* if user register itself the redirect to profile page */}
        <Route path='/Register' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
          <Register/> 
        </ProtectedRoute>} />


        <Route path='/forgetpassword' element={<ForgetPassword/> } />
        <Route path='/resetpassword/:token' element={<ResetPassword/> } />
        <Route path='/subscribe' element={<Subscribe/> } />
        <Route path='*' element={<NotFound/> } />
        <Route path='/paymentsuccess' element={<PaymentSuccess/> } />
        <Route path='/paymentfail' element={<PaymentFail/> } />
            
            {/* Admin Routes */}

            <Route path='/admin/dashboard' element={<Dashboard/> } />
            <Route path='/admin/createcourse' element={<CreateCourse/> } />
            <Route path='/admin/courses' element={<AdminCourses/> } />
            <Route path='/admin/users' element={<Users/> } />


      </Routes>
      <Footer/>
      <Toaster/>  {/*After api*/}
    </Router>
  );
}

export default App;
