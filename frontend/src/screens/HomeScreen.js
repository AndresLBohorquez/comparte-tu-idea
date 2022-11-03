//import data  from "../data";
import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';


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
    const [{ loading, error, topics }, dispatch] = useReducer(logger(reducer), {
        topics: [],
        loading: true, error: '',
    });


    //const [topics, setTopics] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('http://localhost:5000/api/topics')
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, []);
    return <div>
        <h1>Lista de Temas</h1>
        <div className="topics">
            {loading ? (
                <div>Cargando datos...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                topics.map((topic) => (
                    <div className="topic" key={topic.slug}>
                        <Link to={`/topic/${topic.slug}`}>
                            <img src={topic.image} alt={topic.name} />
                        </Link>
                        <div className="topic-info">
                            <a href={`/topic/${topic.slug}`}>
                                <p>{topic.name}</p>
                            </a>
                            <p>{topic.description}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    </div>
}

export default HomeScreen;