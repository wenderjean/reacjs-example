import React from 'react';

import Title from './Header/Title'

export default class Header extends React.Component {
  render() {
    return (
      <header class="top-bar hide-for-small noprint">
        <Title title={ this.props.title } />
      </header>
    );
  }
}

