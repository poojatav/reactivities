import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Grid, Image } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';

export default observer(function ActivityDetails() {

    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();

    useEffect(() =>{
        if(id) loadActivity(id);
    },[id, loadActivity])

    if (loadingInitial || !activity) return <LoadingComponent />
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity}/>
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar />
            </Grid.Column>
        </Grid>
        // <Card fluid>
        //     <Image src='/assets/logo1.jpg' style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
        //     <CardContent>
        //         <CardHeader>{activity.title}</CardHeader>
        //         <CardMeta>
        //             <span>{activity.date}</span>
        //         </CardMeta>
        //         <CardDescription>
        //             {activity.description}
        //         </CardDescription>
        //     </CardContent>
        //     <CardContent extra>
        //         <Button.Group widths='2'>
        //             <Button as= {Link} to={`/manage/${activity.id}`} basic color='blue' content='Edit' />
        //             <Button as= {Link} to='/activities' basic color='grey' content='Cancel' />
        //         </Button.Group>
        //     </CardContent>
        // </Card>
    )
})
