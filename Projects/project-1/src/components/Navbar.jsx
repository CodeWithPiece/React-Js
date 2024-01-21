import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="" />
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
