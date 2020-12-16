import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked})
  }

  
  render() {
    return (
      <Card>
        <div>
          <div onClick={this.clickHandler} className="image">
            <img src={this.state.clicked ? this.props.pokeObj.sprites.back : this.props.pokeObj.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
        <div className="header">{this.props.pokeObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeObj.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
