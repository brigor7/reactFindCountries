import React, { Component, Fragment } from 'react';
import { formatNumber } from '../../helpers/formatHelpers';

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(newText);
  };

  render() {
    const { filter, countryCount, totalPopulation } = this.props;
    return (
      <Fragment>
        <label for="pais">Nome do País:</label>
        <input
          type="text"
          id="pais"
          value={filter}
          onChange={this.handleInputChange}
        />
        <span>
          |Paises:<strong>{formatNumber(countryCount)}</strong>{' '}
        </span>
        <span>
          |Populaçao: <strong>{formatNumber(totalPopulation)}</strong>
        </span>
      </Fragment>
    );
  }
}
