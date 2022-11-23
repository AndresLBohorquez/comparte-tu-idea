//import data  from "../data";
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topic from '../components/Topic';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, topics: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

function HomeScreen() {
    const [{ loading, error, topics }, dispatch] = useReducer(reducer, {
        topics: [],
        loading: true, error: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('http://localhost:5001/api/topics')
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, []);
    return (<div>
        <Helmet><title>Comparte tu idea</title></Helmet>
        <h1>Lista de Temas </h1>
        <div className="topics">
            {loading ? (<LoadingBox />)
                : error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (<Row>
                        {topics.map((topic) => (
                            <Col key={topic.slug} className="mb-3">
                                <Topic topic={topic}></Topic>
                            </Col>
                        ))}
                    </Row>
                    )}
        </div>
    </div>
    )
};

export default HomeScreen;