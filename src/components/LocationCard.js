import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard (props) {
  return   <Card>
   <Card.Content>
    <Card.Header>{props.location.name}</Card.Header>
    <Card.Meta>
      <span className='date'>{props.location.dimension}</span>
    </Card.Meta>
    <Card.Description>
    {props.location.type}

    </Card.Description>
  </Card.Content>
</Card>

    
}



