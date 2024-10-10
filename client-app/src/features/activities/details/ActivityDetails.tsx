import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from 'semantic-ui-react'
//import { Activity } from '../../../app/models/activity'
import { useStore } from '../../../app/stores/store'
import LoadingComponent from '../../../app/layout/LoadingComponent';

// interface Props {
//     activity: Activity
//     cancelSelectActivity: () => void;
//     openForm: (id: string) => void;
// }

//export default function ActivityDetails({ activity, cancelSelectActivity, openForm}: Props) {
export default function ActivityDetails() {

    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

    if (!activity) return <LoadingComponent />
    return (
        <Card fluid>
            <Image src='/assets/logo1.jpg' style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    {activity.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel' />
                </Button.Group>
            </CardContent>
        </Card>
    )
}
