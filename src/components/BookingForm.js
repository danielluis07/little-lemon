import React, { useState, useEffect } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = date && time && guests >= 1 && occasion;
    setIsFormValid(isValid);
  }, [date, time, guests, occasion]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
    fetch(event.target.value)
      .then((times) => {
        dispatch({ type: "SET_TIMES", availableTimes: times });
      })
      .catch((error) => {
        console.error("Failed to fetch times:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm({ date, time, guests, occasion });
    console.log("Form data:", formData);
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required>
        <option value="">Select Time</option>
        {/*         {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))} */}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required>
        <option value="">Select Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;
