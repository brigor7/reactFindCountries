import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    this.setState({
      allCountries: json,
    });
  }
  render() {
    const { allCountries } = this.state;
    return (
      <div className="container">
        <h3>React Find Countries</h3>
      </div>
    );
  }
}
