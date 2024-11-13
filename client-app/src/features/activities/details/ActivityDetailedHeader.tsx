import { observer } from "mobx-react-lite";
import { Activity } from "../../../app/models/activity";
import { Button, Item, Segment, Image, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import { useStore } from "../../../app/stores/store";
import '../../../app/layout/styles.css';  

interface Props {
    activity: Activity;
}

export default observer(function ActivityDetailedHeader({ activity }: Props) {
    const { activityStore: { updateAttendeance, loading, cancelActivityToggle } } = useStore();

    return (
        <Segment.Group>
            <Segment basic attached='top' style={{ padding: '0' }}>
                {activity.isCancelled && (
                    <Label
                        style={{ position: 'absolute', zIndex: 1000, left: -14, top: 20 }}
                        ribbon
                        color='red'
                        content='Cancelled'
                    />
                )}
                <div className="activity-container">
                    <Image
                        src={`/assets/categoryImages/${activity.category}.jpg`}
                        fluid
                        className="activity-image"
                    />
                    <div className="text-overlay">
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <h2 className="activity-header-text">{activity.title}</h2>
                                    <p className="activity-paragraph-text">{format(activity.date!, 'dd MMM yyyy h:mm aa')}</p>
                                    <p className="activity-paragraph-text">
                                        Hosted by{' '}
                                        <strong className="activity-host-text">
                                            <Link to={`/profiles/${activity.hostUsername}`} style={{ color: 'white' }}>
                                                {activity.hostUsername}
                                            </Link>
                                        </strong>
                                    </p>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </div>
                </div>
            </Segment>
            <Segment clearing attached='bottom' className="activity-buttons">
                {activity.isHost ? (
                    <>
                        <Button
                            color={activity.isCancelled ? 'green' : 'red'}
                            floated='left'
                            basic
                            content={activity.isCancelled ? 'Re-activate activity' : 'Cancel Activity'}
                            onClick={cancelActivityToggle}
                            loading={loading}
                        />
                        <Button
                            as={Link}
                            to={`/manage/${activity.id}`}
                            color='orange'
                            floated='right'
                            disabled={activity.isCancelled}
                        >
                            Manage Event
                        </Button>
                    </>
                ) : activity.isGoing ? (
                    <Button onClick={updateAttendeance} loading={loading}>Cancel attendance</Button>
                ) : (
                    <Button
                        disabled={activity.isCancelled}
                        onClick={updateAttendeance}
                        loading={loading}
                        color='teal'
                    >
                        Join Activity
                    </Button>
                )}
            </Segment>
        </Segment.Group>
    );
});
