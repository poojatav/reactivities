import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { Image, Item, Label, List, Segment } from "semantic-ui-react"

export default observer(function ActivityDetailedSidebar() {
  return (
    <>
    <Segment
    textAlign='center'
    style={{ border: 'none' }}
    attached='top'
    secondary
    inverted
    color='teal'>
        3 people Going
    </Segment>
    <Segment attached>
        <List relaxed divided>
            <Item style={{position:'relative'}}>
                <Label 
                style={{position:'absolute'}}
                color='olive'
                ribbon='right'>Host
                </Label>
                <Image size='tiny' src={'/assets/logo.jpg'} />
                <Item.Content verticalAlign='middle'>
                    <Item.Header as='h3'>
                        <Link to={'#'}>Bob</Link>
                    </Item.Header>
                    <Item.Extra style={{ color: 'orange'}}>Following</Item.Extra>
                </Item.Content>
            </Item>

            <Item style={{position:'relative'}}>
              <Image size='tiny' src={'/assets/logo.jpg'} />
                <Item.Content verticalAlign='middle'>
                    <Item.Header as='h3'>
                        <Link to={'#'}>Sally</Link>
                    </Item.Header>
                </Item.Content>
            </Item>
        </List>
    </Segment>
    </>
  )
})
