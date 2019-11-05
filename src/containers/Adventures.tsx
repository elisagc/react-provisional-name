import React from "react";
import Adventures from "../components/Adventures";
import { typeAdventure } from "../types/adventure";
import fetch from "../utils/mockFetch";

class AdventuresContainer extends React.Component {
  state = {
    adventures: []
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    fetch<typeAdventure[]>("/adventures")
      .then(response => response.json())
      .then(adventures =>
        adventures.map(({ ...rest }) => {
          return {
            ...rest
          };
        })
      )
      .then(adventures => {
        if (this._isMounted) {
          this.setState({
            adventures
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  public render() {
    const { adventures } = this.state;
    return <Adventures adventures={adventures} />;
  }
}

export default AdventuresContainer;