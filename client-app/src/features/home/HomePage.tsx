import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage(){
    return(
        <Container style={{marginTop: '7em'}}>
            <h2>Home Page</h2>
            <h3>Go to <Link to='/activities'>Activities</Link></h3>
        </Container>
    )
}