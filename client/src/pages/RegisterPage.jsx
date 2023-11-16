import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [delivery_address, setDelivery_address] = useState("");
  const [phone_number, setPhone_number] = useState("");

  async function RegisterUser(e) {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email.match(emailRegex)) {
      // Display an error message using browser alert
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post("/register", {
        full_name,
        email,
        delivery_address,
        password,
        phone_number
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
        <form className="max-w-md mx-auto" onSubmit={RegisterUser}>
          <label htmlFor="full_name">Name</label>
          <input
            type="text"
            name="full_name"
            placeholder="your full_name here"
            value={full_name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="your@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="delivery_address">Delivery_address</label>
          <input
            type="delivery_address"
            name="delivery_address"
            placeholder="delivery_address"
            value={delivery_address}
            onChange={(e) =>setDelivery_address(e.target.value)}
          />
          <label htmlFor="phone_number">Phone_number</label>
          <input
            type="phone_number"
            name="phone_number"
            placeholder="phone_number"
            value={phone_number}
            onChange={(e) =>setPhone_number(e.target.value)}
          />
          <button type="submit" className="primary">
            Register
          </button>
          <div className="text center py-2 ml-20 text-gray-500">
            Already a member?
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
