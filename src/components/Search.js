import React from 'react'

const Search = props => {

  function localSearchHandler(e) {
    props.handleSearch(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={props.value} className="prompt" onChange={localSearchHandler}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
