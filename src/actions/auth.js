import { USER_LOGGED_IN } from './types';
import api from '../api';
export const userLoggedIn = (user) => ({
    type:USER_LOGGED_IN,
    user
})
//Actions are payloads of information that send data from your application to your store. 
//They are the only source of information for the store. You send them to the store using store.dispatch().
export const login = credentials => dispatch => api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));