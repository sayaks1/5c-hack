import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { supabase } from '../supabaseClient';
import HomeButton from '../components/HomeButton'; 


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up
    const [message, setMessage] = useState('');
    const navigate = useNavigate();  // Create an instance of useNavigate

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        setLoading(false);
        if (error) {
            setMessage(error.message);
        } else {
            if (!isLogin) {
                setMessage('Signup successful, please check your email for a confirmation link.');
            } else {
                console.log("logged in!")
                setMessage('Login successful!');
                navigate('/');  // Use navigate to go to the home page after successful login
            }
        }
    };

    return (
        <div>
            <HomeButton />
            <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
            <form onSubmit={handleAuth}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {isLogin ? 'Log In' : 'Sign Up'}
                </button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Need to create an account?' : 'Already have an account?'}
            </button>
        </div>
    );
}

export default Login;
