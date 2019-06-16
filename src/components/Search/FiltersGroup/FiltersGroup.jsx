
import React, { PureComponent } from 'react'
import { arrayOf, oneOfType, shape, string, node, bool, object, func } from 'prop-types'
import cn from 'classnames'
import ClickOutside from '../../ClickOutside'
import Filter from './Filter'
import styles from './FiltersGroup.styl'
import { ReactComponent as ChevronIcon } from '../../../../static/images/icons/chevron.svg'

class FiltersGroup extends PureComponent {
  state = {
    isDropdownVisible: false,
  }

  handleToggleDropdown = () => {
    const { onFilterClose, onFilterOpen } = this.props
    const { isDropdownVisible } = this.state

    this.setState({
      isDropdownVisible: !isDropdownVisible,
    }, () => {
      if (isDropdownVisible) {
        onFilterClose()
      } else {
        onFilterOpen()
      }
    })
  }

  handleCloseDropdown = () => {
    this.setState({
      isDropdownVisible: false,
    })
  }

  handleFilterChange = event => {
    const { name: filterGroupName, searchValue, updateCardFilters, resetSearchQuery } = this.props
    const { name: filterName, checked } = event.target
    const filter = { filterGroupName, filterName, checked }

    if (!searchValue) {
      resetSearchQuery()
    }

    updateCardFilters(filter)
  }

  render() {
    const { name, filters, isFocused, filtersState } = this.props
    const { isDropdownVisible } = this.state

    return (
      <div
        className={cn({
          [styles['filter-group']]: true,
          [styles['filter-group_active']]: isDropdownVisible,
          [styles['filter-group_focused']]: isFocused,
        })}
      >
        <button type="button" onClick={this.handleToggleDropdown}>
          {name}
          <ChevronIcon />
        </button>

        {isDropdownVisible &&
          <ClickOutside
            component={<div />}
            className={styles.dropdown}
            onOutsideClick={this.handleCloseDropdown}
          >
            {filters.map(filter =>
              <Filter
                id={filter.id}
                key={filter.id}
                name={filter.name}
                content={filter.content}
                checked={filtersState[name][filter.name]}
                onChange={this.handleFilterChange}
              />
            )}
          </ClickOutside>
        }
      </div>
    )
  }
}

FiltersGroup.propTypes = {
  name: string,
  filters: arrayOf(shape({
    id: string,
    content: oneOfType([string, node]),
  })),
  filtersState: object,
  searchValue: string,
  isFocused: bool,
  onFilterOpen: func,
  onFilterClose: func,
  updateCardFilters: func,
  resetSearchQuery: func,
}

export default FiltersGroup
