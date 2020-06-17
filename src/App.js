import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: '',
    };
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filteredName: name.toLowerCase(),
        flag,
        population,
      };
    });

    const filteredPopulation = this.calculateTotalPopulationFrom(allCountries);

    this.setState({
      allCountries,
      filteredCountries: allCountries,
      filteredPopulation,
    });
  }

  calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((acc, curr) => {
      return acc + curr.population;
    }, 0);
    return totalPopulation;
  };

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });
    const { allCountries } = this.state;
    const filteredCountries = allCountries.filter((country) => {
      return country.filteredName.includes(newText.toLowerCase());
    });

    const filteredPopulation = this.calculateTotalPopulationFrom(
      filteredCountries
    );

    this.setState({
      filteredCountries,
      filteredPopulation,
    });
  };

  countPopulation = (filteredCountries) => {};

  render() {
    const { filteredCountries, filteredPopulation, filter } = this.state;
    return (
      <div className="container">
        <h3>React Find Countries</h3>
        <Header
          filter={filter}
          countryCount={filteredCountries.length}
          totalPopulation={filteredPopulation}
          onChangeFilter={this.handleChangeFilter}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}
