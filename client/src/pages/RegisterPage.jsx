import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();

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
      navigate("/login");

    } catch (err) {
      alert("Registration failed");
    }
  }

  return (
    <div className="w-full">
    <div className=" grow flex-col flex items-center justify-around bg-green-100 h-full">
      <div className="mb-60 flex-grow">
        <h1 className="text-3xl text-center mb-4 font-serif py-4 px-10">REGISTER</h1>
        <p className="text-base text-green-900 font-normal leading-normal">
        </p>
        <div className="forms-container">
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
            <select
              name="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="Gender">Date of Birth</label>
            <div className="flex">
              <div className="mr-2">
                <label htmlFor="day"></label>
                <input
                  type="text"
                  name="day"
                  placeholder="DD"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
              </div>
              <div className="mr-2">
                <label htmlFor="month"></label>
                <input
                  type="text"
                  name="month"
                  placeholder="MM"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="year"></label>
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
        <div className="button-container flex items-center px-20 ml-5">
        <div className="button-container flex items-center py-4 ">
        <button type="submit" className="large" onClick={RegisterUser}>
          Register                       
        </button>
      </div>
      </div>
      <div className="button-container flex items-center px-20 ">
      <div className="text center py-2 ml-50 text-gray-500 px-20">
        Already a member?
        <Link className="underline text-black" to={"/login"}>
          Login
        </Link>
      </div>
      </div>
    </div>
  </div>
  </div>
);
}