import React from "react";


const Button: React.FC<{ title: string }> = ({ title = "" }) => (
  <div className="social__left-btn btn-purple">
    <button>{title}</button>
  </div>
);


export default Button;