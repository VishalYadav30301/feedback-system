import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";
function Admin_layout() {
  const { user, isLoading} = useAuth ();
  console.log("Admin layout", user);

  if(isLoading){
    return <h1>Loading......</h1>;
  }

  if(!user.isAdmin){
    return <Navigate to="/" />;
  }

  return (
    <>
    <header>
        <div className="container">
            <nav>
                <ul>
                   <li> <NavLink to="/admin/users"><FaUser /> Users </NavLink> </li>
                   <li><NavLink to="/admin/contacts"><FaMessage /> Contact </NavLink></li>
                   <li><NavLink to="/Services"><FaRegListAlt /> Services </NavLink></li>
                   <li><NavLink to="/"> <FaHome /> Home </NavLink></li>
                   <li><NavLink to="/admin/feedback"> Feedback </NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
  )
}

export default Admin_layout
