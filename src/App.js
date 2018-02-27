import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // 只有在extends Compenent 情况下才可以用state 其他都不行，
  // 必须小心使用state 因为会rerender
  // state 是在该component 里面， 而props 是从外面进来
  state = {
    persons: [{ name: "Max", age: 28 }, { name: "Menu", age: 27 }],
    showPersons: false
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({
      persons: [{ name: "Max", age: 35 }, { name: "Menu", age: 30 }]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [{ name: "Max", age: 35 }, { name: event.target.value, age: 30 }]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    // create copy,change that then update that with set state
    // better approach, update state without mutating original state
    // const persons = this.state.persons.slice(); solution 1
    const persons = [...this.state.persons]; // solution 2
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.togglePersonHandler}>ToggleName</button>
        {persons}
      </div>
    );
  }
}

export default App;
