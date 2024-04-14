import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to="/" className="homeButton">
      Home
    </Link>
  );
};

export default HomeButton;