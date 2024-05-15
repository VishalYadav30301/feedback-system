import React from 'react'
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


function Admin_feedback() {
  const [feedbackData, setFeedbackData] = useState([]);
  const { authorizationToken, API} = useAuth();

  const getFeedbackData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/feedback`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("Feedback data: ", data);
      if (response.ok) {
        setFeedbackData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFeedbackById = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/feedback/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getFeedbackData();
        toast.success("deleted successfully");
      } else {
        toast.error("Not Deleted ");
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getFeedbackData();
  }, []);

  return (
    <section className="admin-contacts-section">
    <h1>Admin Feedback Data </h1>

    <div className="container  admin-users">
      {feedbackData.map((curContactData, index) => {
        const { username, email, feedback, _id } = curContactData;

        return (
          <div key={index}>
            <p>{username}</p>
            <p>{email}</p>
            <p>{feedback}</p>
            <button className="btn" onClick={() => deleteFeedbackById(_id)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  </section>
  );
};

export default Admin_feedback
