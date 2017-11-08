import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="Nav">
        <img src={require('../images/nom-icon.svg')} className="nom-icon" alt="nom-icon" />
        <img src={require('../images/nommad-logo-lrg.svg')} className="nommad-logo-lrg" alt=""  />
      </div>
    );
  }
}


export default Search;
