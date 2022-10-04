import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FindText, InputFind } from 'components/Filter/Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <>
        <FindText>Find contacts by name</FindText>
        <InputFind
          type="text"
          name="name"
          onChange={this.props.handleChange}
          value={this.props.value}
        />
      </>
    );
  }
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
