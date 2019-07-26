import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard (props) {
  return   <Card>
  <Image src={props.character.image} wrapped ui={false} />
  <Card.Content>
    <Card.Header>{props.character.name}</Card.Header>
    <Card.Meta>
      <span className='date'>{props.character.gender}</span>
    </Card.Meta>
    <Card.Description>
    {props.character.status}
    {props.character.species}

    </Card.Description>
  </Card.Content>
</Card>
 {/* <div>
  <p>{props.character.name}</p>
  <p>{props.character.status}</p>
  <p>{props.character.species}</p>
  <p>{props.character.type}</p>
  <p>{props.character.gender}</p>
  <p>{props.character.origin.name}</p>
  <p>{props.character.location.name}</p>
  <p>{props.character.image}</p>
  <p>{props.character.name}</p> 
  </div> */}
    
}



