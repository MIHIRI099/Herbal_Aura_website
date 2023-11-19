import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [delivery_address, setDelivery_address] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [gender, setGender] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  async function RegisterUser(e) {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await axios.post("/user/register", {
        full_name,
        email,
        delivery_address,
        password,
        phone_number,
        gender,
        day,
        month,
        year,
      });
      alert("Registration successful");
    } catch (err) {
      alert("Registration failed");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-4xl text-center mb-4">REGISTER</h1>
        <div className="forms-container">
          {/* First Form */}
          <form className="form" onSubmit={RegisterUser}>
            <label htmlFor="full_name">Name</label>
            <input
              type="text"
              name="full_name"
              placeholder="Your full name here"
              value={full_name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="Gender">Gender</label>
            <input
              type="text"
              name="Gender"
              placeholder="Male/Female/Other"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <div className="flex">
              <div className="mr-2">
                <label htmlFor="day">Day</label>
                <input
                  type="text"
                  name="day"
                  placeholder="DD"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
              </div>
              <div className="mr-2">
                <label htmlFor="month">Month</label>
                <input
                  type="text"
                  name="month"
                  placeholder="MM"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  name="year"
                  placeholder="YYYY"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
            <label htmlFor="phone_number">Phone number</label>
            <input
              type="text"
              name="phone_number"
              placeholder="Phone number"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />
          </form>

          {/* Second Form */}
          <form className="form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="delivery_address">Delivery address</label>
            <input
              type="text"
              name="delivery_address"
              placeholder="Delivery address"
              value={delivery_address}
              onChange={(e) => setDelivery_address(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </form>
        </div>
        <div className="button-container items-center">
        <button type="submit" className="primary" onClick={RegisterUser}>
          Register
        </button>
        </div>
        <div className="text center  py-2 ml-20 text-gray-500">
          Already a member?
          <Link className="underline text-black" to={"/login"}>
            Login
          </Link>
          </div>
        </div>
      </div>
  );
}
