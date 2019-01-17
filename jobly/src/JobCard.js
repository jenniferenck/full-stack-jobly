import React, { Component } from 'react';

class JobCard extends Component {
  static defaultProps = {};

  render() {
    // destructure props...
    return (
      <div className="JobCard card my-3">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            <div>{this.props.title}</div>
            <p>Salary: {this.props.salary}</p>
            <p>Equity: {this.props.equity}</p>
          </h5>
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
