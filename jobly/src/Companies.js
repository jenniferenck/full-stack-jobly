import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './JoblyApi';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [] };
  }

  async componentDidMount() {
    try {
      this.setState({
        companies: await JoblyApi.getAllCompanies()
      });
    } catch (error) {
      this.setState({
        error: true
      });

      console.log('error msg', error);
    }
  }

  render() {
    // console.log(this.state.companies);
    return (
      <div className="Companies">
        <SearchForm />
        {this.state.companies.length > 0 ? (
          this.state.companies.map(c => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              desc={c.description}
              logo={c.logo_url}
            />
          ))
        ) : (
          <h3>Loading companies...</h3>
        )}
      </div>
    );
  }
}

export default Companies;
