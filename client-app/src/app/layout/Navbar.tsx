import { Button, Container, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to ='/' header>
                    <img src="/assets/activity.png" alt="logo" style={{marginRight:'10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to ='activities' name='Activities' />
                <Menu.Item>
                    <Button as={NavLink} to ='createActivity' positive content='Create Acivity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
