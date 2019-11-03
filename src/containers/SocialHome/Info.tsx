import React from "react";
import Button from "./Button";

export const Info: React.FC<{ changeState: () => void, login: boolean }> = ({ changeState, login }) => {

  return (
    <div className="social__left">
      <Button title={login ? "¿No eres miembro? Pincha aquí" : "¿Ya eres miembro?"} nameClass="social__left-btn" changeState={changeState} />
    </div>
  )
}

export default Info;