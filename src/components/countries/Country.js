import React, { Component } from 'react';
import css from './countries.module.css';

export default class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <li className={css.flexRow} key={country.id}>
        <img className={css.flag} src={country.flag} />
        {country.name}
      </li>
    );
  }
}
