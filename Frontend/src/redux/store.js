import { configureStore } from '@reduxjs/toolkit';
 import {userReducer} from './reducers/userReducer';


const store = configureStore({
  reducer: {
    user: userReducer,
    
  },
});

export default store;

export const server = 'https://coursebundler-5929addf1c2a.herokuapp.com/api/v1';
