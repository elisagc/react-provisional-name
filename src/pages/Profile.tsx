import React from "react";

interface props {
  data: string[];
}

export const Profile: React.FC<props> = props => {
  console.log(props);
  return (
    <div>
      {props.data.map(e => (
        <div key={e}> {e} </div>
      ))}
    </div>
  );
};
