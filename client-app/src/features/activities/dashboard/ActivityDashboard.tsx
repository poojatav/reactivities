import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
// import ActivityDetails from "../details/ActivityDetails";
// import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
      if(activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />

    return (
        <Grid>           
            <Grid.Column mobile={16} tablet={4} computer={6}>
                <ActivityFilters />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={10}>
                <ActivityList />
            </Grid.Column>
        </Grid>
    )
})