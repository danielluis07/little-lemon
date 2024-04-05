import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

const initializeTimes = () => {
  return []; // Initialize with an empty array
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      // Set the available times
      return action.availableTimes;
    default:
      throw new Error();
  }
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  useEffect(() => {
    // Fetch times for today's date when the component mounts
    const today = new Date().toISOString().split("T")[0];
    fetch(today).then((times) => {
      dispatch({ type: "SET_TIMES", availableTimes: times });
    });
  }, []);

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const result = await fetch(formData);
      if (result) {
        navigate("/confirmed");
      } else {
        // Handle submission failure (e.g., show error message)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error scenario
    }
  };

  return (
    <div>
      <h1>Reserve Your Table</h1>
      <p>
        Welcome to Little Lemon's reservation page. Please fill out the form
        below to book your table.
      </p>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

      <p>
        Thank you for choosing Little Lemon. We look forward to serving you!
      </p>
    </div>
  );
}

export default BookingPage;
