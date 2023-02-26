import logo from './logo.svg';
import './App.css';
import Routers from './Routes/Routers';
import { Container } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './redux/actions';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts.getPostsRequest());
    }, [dispatch]);

    return (
        <>
            <Container>
                <Routers />
            </Container>
        </>
    );
}

export default App;
