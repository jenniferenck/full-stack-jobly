import React, { Component } from 'react';
import JobCard from './JobCard';

class Company extends Component {
  static defaultProps = {};
  render() {
    return (
      <div className="Company">
        <h1>This will list the details of one company</h1>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    );
  }
}

export default Company;
