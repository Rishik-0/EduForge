import React, { useState } from "react";
import Background from "../components/background/Background";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate("/home")
    }

    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");




    return(
        <>
        
        <Background/>
                    <img className="logo" src="src/assets/forge.png" alt="logo" />

        <div className="login-wrapper">
            <div className="dynamic-scroll-container">
                <div className="scroll-content">
                    <img src="src/assets/cover1.png" alt="scroll image" />
                    <img src="src/assets/cover2.png" alt="scroll image" />
                    <img src="src/assets/cover2.png" alt="scroll image" />
                    <img src="src/assets/cover1.png" alt="scroll image" />

                    {/* for infinite scroll */}

                    <img src="src/assets/cover1.png" alt="scroll image" />
                    <img src="src/assets/cover2.png" alt="scroll image" />
                    <img src="src/assets/cover2.png" alt="scroll image" />
                    <img src="src/assets/cover1.png" alt="scroll image" />

                </div>
            </div>   
            <div className="login-container">
                <h1>Welcome.</h1>
                <p><Link to='/signup'><b>Create a free account</b></Link> or log in to get started.</p>
                <form className="login-form">
                    <label for="username">Username</label>
                    <input type="text"
                    id="username" 
                    placeholder="Enter username"
                    value={username}
                    onChange={(e)=> setusername(e.target.value)}
                    required
                    />
                    
                    <label for="login-pass">Password</label>
                    <input type="password"
                    id="login-pass"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setpassword(e.target.value)}
                    required
                      />

<<<<<<< Updated upstream
                    <button type="button" onClick={handleLogin}>Log In</button>
=======
                    <button type="button"
                    
                    >Log In</button>
>>>>>>> Stashed changes
                </form>
                
            </div>
            
        </div>
            
        </>
    
        
)
}
export default Login;