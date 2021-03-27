import { render } from '@testing-library/react';
import React from 'react';
import {Link} from 'react-router-dom'

class CharacterCard extends React.Component
{
  
  render()
  {
    return(
      <Link to={`/consulta-personaje/${this.props.character.id}/view`} >
        <div
            className="CharacterCard"
            style={{ backgroundImage: `url(${this.props.character.image})` }}
        >
          <div className="CharacterCard__name-container text-truncate">
            {this.props.character.id} -  {this.props.character.name} 
          </div>
        </div>
      </Link>

    )
  }
}
  

export default CharacterCard;
