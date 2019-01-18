import React, { Component } from 'react';

class JobCard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleApply(this.props.id);
    this.setState({ disabled: 'applied' });
  }
  render() {
    let normalButton = (
      <button
        onClick={this.handleClick}
        type="button"
        className="btn btn-danger"
      >
        Apply
      </button>
    );
    let disabledButton = (
      <button
        onClick={this.handleClick}
        type="button"
        className="btn btn-danger"
        disabled
      >
        Apply
      </button>
    );
    return (
      <div className="JobCard card my-3">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            <div>{this.props.title}</div>
            <p>Salary: {this.props.salary}</p>
            <p>Equity: {this.props.equity}</p>
          </h5>
          {this.props.disabled ? disabledButton : normalButton}
        </div>
      </div>
    );
  }
}

export default JobCard;
