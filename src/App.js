import React, { Component } from "react";
import "./App.css";
import Styles from "./Components/Styles.css";
import Data from "./assets/data";
import Character from "./Components/Character";
import Header from "./Components/Header";
import cloneDeep from "clone-deep";
import Content from "./Components/Content";

class App extends Component {
  state = {
    ...Data,
    statusFilter: 0,
    vistaMaximizada: 0,
    filterName: ""
  };

  nameFilter = name => {
    this.setState({ filterName: name });
  };
  statusOnClick = numberStatus => {
    this.setState({ statusFilter: numberStatus });
  };
  changeVistaMaximizada = id => {
    this.setState({ vistaMaximizada: id });
  };
  returnOriginal = () => {
    this.setState({ vistaMaximizada: 0 });
  };

  render() {
    return (
      <div className="App">
        <div className="Content">
          <Content
            statusOnClick={this.statusOnClick}
            characters={this.state.results}
            statusFilter={this.state.statusFilter}
            filterName={this.state.filterName}
            vistaMaximizada={this.state.vistaMaximizada}
            changeVistaMaximizada={this.changeVistaMaximizada}
            returnOriginal={this.returnOriginal}
          />
        </div>
        <div className="Header">
          <Header
            characters={this.state.results}
            statusOnClick={this.statusOnClick}
            nameFilter={this.nameFilter}
          />
        </div>
      </div>
    );
  }
}

export default App;
