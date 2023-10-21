import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleLoginSubmit(e) {
        e.preventDefault();

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!email.match(emailRegex)) {
          // Display an error message using browser alert
          alert("Please enter a valid email address.");
          return;
        }
    
        try {
          await axios.post("/login", {
            email,
            password,
          });
          alert("Login successful");
        } catch (error) {
          console.log(error);
          alert("Login failed");
        }
    
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-60">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto " onSubmit={handleLoginSubmit}>
                <label htmlFor="">Email</label>
                <input type="email" 
                placeholder="your@gmail.com" 
                value={email} 
                onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="">Password</label>
                <input type="password" 
                placeholder="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} />
                <button className="primary">Login</button>
                <div className="text center py-2 ml-12 text-gray-500">Do not have an account yet?  
                <Link className="underline text-black" to={'/register'}> Register Now</Link>
                </div>
            </form>
        </div>
        </div>
    )

}