import React, { Component, Fragment } from 'react';
import { formatNumber } from '../../helpers/formatHelpers';
import css from './header.module.css';

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(newText);
  };

  render() {
    const { filter, countryCount, totalPopulation } = this.props;
    return (
      <div className="row">
        <div className="col s12 m6">
          <label for="pais">Nome do País:</label>
          <input
            type="text"
            id="pais"
            value={filter}
            onChange={this.handleInputChange}
          />
        </div>
        <span className="col s6 m2">
          |Paises:<strong>{formatNumber(countryCount)}</strong>{' '}
        </span>
        <span className="col s6 m4">
          |Populaçao: <strong>{formatNumber(totalPopulation)}</strong>
        </span>
      </div>
    );
  }
}
