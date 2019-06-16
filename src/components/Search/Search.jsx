
import React, { PureComponent, Fragment } from 'react'
import { func } from 'prop-types'
import cn from 'classnames'
import FiltersGroup from './FiltersGroup'
import ClickOutside from '../ClickOutside'
import * as filters from '../../data/filters'
import styles from './Search.styl'

const filtersGroups = ['color', 'rarity', 'type']
const startingSearchQuery = 'c:w or c:r or c:g or c:u or c:b'

class Search extends PureComponent {
  state = {
    searchValue: '',
    isFocused: false,
  }

  componentWillMount() {
    this.props.getCards({ searchQuery: startingSearchQuery })
  }

  handleChangeSearchValue = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  handleSearchCards = event => {
    if (event.key !== 'Enter') {
      return
    }

    const { searchValue } = this.state
    const { getCards } = this.props

    if (searchValue) {
      getCards({ searchQuery: searchValue })
    } else {
      getCards({ searchQuery: startingSearchQuery })

      this.setState({
        searchValue: '',
      })
    }
  }

  handleFocus = () =>
    this.setState({
      isFocused: true,
    })

  handleOutsideClick = () =>
    this.setState({
      isFocused: false,
    })

  render() {
    const { searchValue, isFocused } = this.state

    return (
      <Fragment>
        <ClickOutside
          component={<div />}
          className={
            cn({
              [styles.search]: true,
              [styles.search_focused]: isFocused,
            })
          }
          onOutsideClick={this.handleOutsideClick}
        >
          <input
            type="search"
            placeholder="I am searching for..."
            value={searchValue}
            onFocus={this.handleFocus}
            onChange={this.handleChangeSearchValue}
            onKeyPress={this.handleSearchCards}
          />

          {filtersGroups.map(filtersGroup =>
            <FiltersGroup
              key={filtersGroup}
              name={filtersGroup}
              searchValue={searchValue}
              filters={filters[filtersGroup]}
              onFilterOpen={this.handleFocus}
              onFilterClose={this.handleOutsideClick}
              isFocused={isFocused}
            />
          )}
        </ClickOutside>
      </Fragment>
    )
  }
}

Search.propTypes = {
  getCards: func,
}

export default Search
