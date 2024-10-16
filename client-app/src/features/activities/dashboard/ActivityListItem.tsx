import { Button, Icon, Item, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { Link } from 'react-router-dom'
import {format} from 'date-fns';

interface Props {
    activity: Activity
}
export default function ActivityListItem({ activity }: Props) {

    // const { activityStore } = useStore();
    // const { deleteActivity, loading } = activityStore;
    // const [target, setTarget] = useState('');

    // function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    //     setTarget(e.currentTarget.name);
    //     deleteActivity(id);
    // }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        {/* <Item.Image size='tiny' circular src={`/assets/categoryImages/${activity.category}.jpg`} /> */}
                        <Item.Image size='tiny' circular src='/assets/logo.jpg' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hoosted by bob</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />{format(activity.date!, 'dd MMM yyyy h:mm aa')}
                    <Icon name='marker' />{activity.venue}
                </span>
            </Segment>
            <Segment secondary >
                Attendees go here!!
            </Segment>
            <Segment cleaning>
                <span>{activity.description}</span>
                <Button
                    as={Link} to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>

    )
}
