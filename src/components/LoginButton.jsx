import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to="/login" className="loginButton">
      Login
    </Link>
  );
};

export default LoginButton;