import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const[user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const[services, setServices] = useState([]);
  const authorizationToken =  `Bearer ${token}`;

  const API = import.meta.env.VITE_APP_URI_API;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
        return localStorage.setItem("token", serverToken);
      };

let isLoggedIn = !!token;
console.log("isLoggedIn",isLoggedIn);

// Tackling the logout functionality
const LogoutUser = () =>{
  setToken("");
  return localStorage.removeItem("token");
};


// JWT AUTHENTICATION currently logged in user data
const userAuthentication = async () => {
  try {
    setIsLoading(true);
    const response = await fetch(`${API}/api/auth/user`,{
      method: 'GET',
      headers:{
        Authorization: authorizationToken,
      },
    });
    if(response.ok){
      const data = await response.json();
      console.log("User data", data.userData);
      setUser(data.userData);
      setIsLoading(false);
    }else{
      console.log("User not authenticated to use admin panel ");
      setIsLoading(false);
    }
  } catch (error) {
    console.log("Error fetching user data", error);
  }
};
 
// to fetch the services  data from database
const getServices = async () => {
  try {
    const response = await fetch(`${API}/api/data/service`, {
      method: 'GET',
    });

    if(response.ok){
      const data = await response.json();
      console.log(data.msg);
      setServices(data.msg);
    }
  } catch (error) {
    console.log(`services frontend error: ${error}`);
  }

}

useEffect(() =>{
  getServices();
  userAuthentication();
}, []);


    return(
    <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading, API}}>
        {children}
    </AuthContext.Provider>

    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
      throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
  };