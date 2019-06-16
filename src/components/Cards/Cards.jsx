
import React, { PureComponent } from 'react'
import styles from './Cards.styl'

class Cards extends PureComponent {
  handlePageNavigation = event => {
    const { searchQuery, activePageNumber, getCards, updatePageNumber } = this.props
    const direction = Number(event.target.dataset.direction)
    const newPageNumber = activePageNumber + direction

    getCards({ searchQuery, pageNumber: newPageNumber })
    updatePageNumber({ activePageNumber: newPageNumber })
  }

  handlePagination = event => {
    const { searchQuery, getCards, updatePageNumber } = this.props
    const newPageNumber = Number(event.target.dataset.pageNumber)

    getCards({ searchQuery, pageNumber: newPageNumber })
    updatePageNumber({ activePageNumber: newPageNumber })
  }

  render() {
    const { cards, totalCards, activePageNumber, isCardsFetching } = this.props
    const pagesNumber = new Array(Math.ceil(totalCards / 175)).fill(null).map((item, index) => index + 1)

    return (
      <section className={styles.cards}>
        <h2>
          {isCardsFetching
            ? 'Searching...'
            : `Total cards ${totalCards}`
          }
        </h2>

        <ul className="cards">
          {cards.map(({ name, id, image_uris }) => (
            <li key={id}>
              <img
                src={(image_uris && image_uris.normal) || require('../../../static/images/card-back.jpg')}
                alt={name}
                width={233}
                height={310}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={this.handlePageNavigation}
          data-direction={-1}
          disabled={activePageNumber === 1}
        >
          prev
        </button>

        {pagesNumber.map(pageNumber =>
          <button
            type="button"
            key={pageNumber}
            disabled={pageNumber === activePageNumber}
            data-page-number={pageNumber}
            onClick={this.handlePagination}
          >
            {pageNumber}
          </button>
        )}

        <button
          type="button"
          onClick={this.handlePageNavigation}
          data-direction={1}
          disabled={activePageNumber === pagesNumber.length}
        >
          next
        </button>
      </section>
    )
  }
}

export default Cards
