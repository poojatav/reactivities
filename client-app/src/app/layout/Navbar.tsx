import { Button, Container, Menu } from 'semantic-ui-react'

interface Props{
    openForm: () => void;
}

export default function Navbar({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/activity.png" alt="logo" style={{marginRight:'10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Acivity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
