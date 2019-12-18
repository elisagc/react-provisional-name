import React from "react";
import { RouteComponentProps } from "react-router";
import Table2 from "../components/Profile/Table";
import dataUsers from "../fake-data/usersRegisters";
import person1 from "../images/profile/person1.jpg";
export const Profile: React.FC<RouteComponentProps> = RouteComponentProps => {
  let data = RouteComponentProps.location.state; // datos que recibo del formulario de registro

  console.log("*******", data);
  if (data === undefined) {
    data = {
      name: "Sin nombre"
    };
  }

  console.log(dataUsers);

  dataUsers.map(e => console.log(e.nick));

  console.log(data);
  return (
    <div className="profile">
      {
        //caja nombre y foto
      }
      <div className="profile__box name_box">
        <div className="profile__name">
          <h1>
            {data.gender === "male"
              ? "Bienvenido"
              : data.gender === "female"
              ? "Bienvenida"
              : "Bienvenid@"}
            <span> {data.name}</span>
          </h1>
          <p className="title">Nivel {data.status}</p>
        </div>

        <div className="profile__picture">
          <img src={person1} alt="you" />
        </div>
      </div>

      {
        //fin caja nombre y foto
      }

      <div className="profile__friends">
        <div className="profile__friends-groups groups_box">
          <Table2 />
        </div>
        <div className="profile__friends-friends friends_box">
          <h1>Amig@s</h1>
          <div>
            <div className="friends_img">
              <span>Pablo666</span>
              <img src={person1} />
            </div>
            <div className="friends_img">
              <span>Pablo666</span>
              <img src={person1} />
            </div>
            <div className="friends_img">
              <span>Pablo666</span>
              <img src={person1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
