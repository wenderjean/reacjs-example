import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <strong>{ this.props.title }</strong>
    );
  }
}

