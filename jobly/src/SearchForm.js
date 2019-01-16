import React, { Component } from 'react';

class SearchForm extends Component {
  static defaultProps = {};
  render() {
    return (
      <div className="SearchForm">
        <form>
          <div className="form-group">
            <label for="searchForm" />
            <input
              type="text"
              className="form-control"
              id="searchForm"
              aria-describedby="search"
              placeholder="Enter Search Term..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
