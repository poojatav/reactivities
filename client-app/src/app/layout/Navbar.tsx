import { Button, Container, Menu } from 'semantic-ui-react'
import { useStore } from '../stores/store'

// interface Props{
//     openForm: () => void;
// }

//export default function Navbar({openForm}: Props) {
export default function Navbar() {
const {activityStore} = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/activity.png" alt="logo" style={{marginRight:'10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button onClick={() => activityStore.openForm()} positive content='Create Acivity' />
                    {/* <Button onClick={openForm} positive content='Create Acivity' /> */}
                </Menu.Item>
            </Container>
        </Menu>
    )
}
