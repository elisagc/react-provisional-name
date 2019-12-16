import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Group from "../components/Group";
import Title from "../components/Reusable/Title";
import fetchGrupos from "../fake-data/groups";

let adventuresID = Object.keys(fetchGrupos);

const Grupos: React.FC<RouteComponentProps<{
  activityID?: string;
}>> = RouteComponentProps => {
  let params = RouteComponentProps.match.params;
  //console.log(params);
  if (Object.keys(params).length === 0) {
    //console.log(RouteComponentProps);
    return (
      <section>
        <Title title="Grupos" />
        <div className="grupos__container">
          {adventuresID.map(adventureID => {
            //let adventure = fetchGrupos[adventureID].adventure;
            let groups = fetchGrupos[adventureID].groups;
            //console.log(groups);
            //console.log(adventure);
            if (Array.isArray(groups)) {
              return groups.map(group => (
                <Group
                  key={group.name}
                  name={group.name}
                  place={group.place}
                  timestamp={group.timestamp}
                />
              ));
            } else {
              return [];
            }
          })}
        </div>
      </section>
    );
  } else {
    let activityID = RouteComponentProps.match.params.activityID;
    //console.log(activityID);
    return (
      <section>
        <Title title="Grupos" />
        <div className="grupos__container">
          {adventuresID.map(adventureID => {
            if (adventureID === activityID) {
              //console.log(activityID);
              //console.log(adventureID);
              let groups = fetchGrupos[adventureID].groups;
              //console.log(groups);
              if (Array.isArray(groups)) {
                return groups.map(group => (
                  <Group
                    key={group.name}
                    name={group.name}
                    place={group.place}
                    timestamp={group.timestamp}
                  />
                ));
              } else {
                return (
                  <div key="key">
                    <p>{groups}</p>
                    <div className="btn--rainbow">
                      <button type="submit" className="btn">
                      Crear grupo
                      </button>
                    </div>
                  </div>
                );
              }
            } else {
              return [];
            }
          })}
        </div>
      </section>
    );
  }
};

export default withRouter(Grupos);
