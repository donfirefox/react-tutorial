import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";

class App extends React.Component {
  heading = (<h1 className="site-heading">Lista de Empleados</h1>);

  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const {characters} = this.state;
    return (
      <div className='container'>
        {this.heading},
        <Table
          dataToTable={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
