import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

class Companies extends Component {
  static defaultProps = {};
  render() {
    return (
      <div className="Companies">
        <SearchForm />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    );
  }
}

export default Companies;
