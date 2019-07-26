import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function EpisodeCard (props) {
  return   <Card>
   <Card.Content>
    <Card.Header>{props.episode.name}</Card.Header>
    <Card.Meta>
      <span className='date'>{props.episode.airdate}</span>
    </Card.Meta>
    <Card.Description>
    {props.episode.episode}

    </Card.Description>
  </Card.Content>
</Card>

    
}



