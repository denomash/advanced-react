import React, { Component } from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300);

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });

    // console.log(this.searchInput.value)
  };
  render() {
    return (
      <input
        // ref={(input) => (this.searchInput = input)}
        type="search"
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
