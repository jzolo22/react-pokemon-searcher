import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonArray: [],
    search: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(pokeArray => this.setState({pokemonArray: pokeArray}))
  }

  handleSearch = (input) => {
    this.setState({search: input})
  }

  searchedPokeArray = () => {
    return this.state.pokemonArray.filter(poke => poke.name.toLowerCase().includes(this.state.search.toLowerCase()))
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search value={this.state.search} handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokeArray={this.searchedPokeArray}/>
      </Container>
    )
  }
}

export default PokemonPage
