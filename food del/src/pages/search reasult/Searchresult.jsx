import React, { useContext } from 'react'
import './SearchResult.css'
import { StoreContext } from '../../components/Context/StoreContext'

const SearchResult = () => {
  const { searchResults, addToCart } = useContext(StoreContext)

  return (
    <div className="search-results">
      <h2>Search Results</h2>

      {(!searchResults || searchResults.length === 0) ? (
        <p className="no-results">No items found. Try another search.</p>
      ) : (
        <div className="search-results-table">
          <div className="search-results-header">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Add to Cart</p>
          </div>
          <hr />

          {searchResults.map((item) => (
            <div key={item._id}>
              <div className="search-results-row">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={() => addToCart(item._id)}>Add</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResult
