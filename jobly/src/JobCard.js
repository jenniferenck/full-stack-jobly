import React, { Component } from 'react';

class JobCard extends Component {
  static defaultProps = {};

  render() {
    // destructure props...
    return (
      <div className="JobCard card my-3">
        <h3>{this.props.title}</h3>
        <div className="card-body">
          <p>Salary: {this.props.salary}</p>
          <p>Equity: {this.props.equity}</p>
          <button
            // onClick={this.props.handleClick}
            type="button"
            className="btn btn-danger"
          >
            Apply
          </button>
        </div>
      </div>
    );
  }
}

export default JobCard;
