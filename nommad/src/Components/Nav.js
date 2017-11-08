import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="Nav">
        <img src={require('../images/menu.svg')} className="menu" />
        <img src={require('../images/nommad-logo-lrg.svg')} className="nommad-logo-lrg" />
      </div>
    );
  }
}


export default Search;
