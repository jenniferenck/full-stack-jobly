import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div className="SearchForm mt-5">
        <form>
          <div className="form-group input-group">
            <label htmlFor="searchForm" />
            <input
              type="text"
              className="form-control"
              id="searchForm"
              aria-describedby="search"
              placeholder="Enter Search Term..."
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
