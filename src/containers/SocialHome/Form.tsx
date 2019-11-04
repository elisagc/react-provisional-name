import React from "react";
import { Animated } from "react-animated-css";

export const Form = () => {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="flash"
      animationInDuration={2000}
      isVisible={true}
    >
      <div className="social__right-form">
        <form action="#" className="form">
          <input
            type="text"
            placeholder="Nombre y Apellidos"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="form-input"
            required
          />
          <input
            type="text"
            className="form-input"
            placeholder="Edad"
            required
          ></input>
          <input
            type="password"
            placeholder="Contraseña"
            className="form-input"
          />

          <div className="form-select">
            <select name="select" defaultValue={"Default"}>
              <option value="Default" disabled>
                Género
              </option>
              <option value="female">Mujer</option>
              <option value="male">Hombre</option>
              <option value="other">Otro</option>
            </select>

            <select name="select" defaultValue={"Default"}>
              <option value="Default" disabled>
                Nivel de aventurer@
              </option>
              <option value="beginner">Principiante</option>
              <option value="intermediate">Intermedio</option>
              <option value="professional">Profesional</option>
            </select>
          </div>

          <div className="form-submit">
            <input type="submit" value="Regístrate" />
          </div>
        </form>
      </div>
    </Animated>
  );
};

export default Form;
