import React, { Component } from 'react';
import JobCard from './JobCard';
import SearchForm from './SearchForm';

class Jobs extends Component {
  static defaultProps = {};
  render() {
    return (
      <div className="Jobs">
        <SearchForm />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    );
  }
}

export default Jobs;
