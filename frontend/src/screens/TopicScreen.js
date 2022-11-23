import axios from "axios";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Rating from "../components/Rating";
import Reviews from "../components/Reviews";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import Swal from "sweetalert2";

const baseURL = "http://localhost:5001";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, topic: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

function TopicScreen() {
    const params = useParams();
    const { slug } = params;

    const [{ loading, error, topic }, dispatch] = useReducer(reducer, {
        topic: [],
        loading: true, error: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`${baseURL}/api/topics/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
            }
        };
        fetchData();
    }, [slug]);

    return (
        Swal.fire({
            toast: true,
            position: 'center',
            title: 'Cargando tema',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            icon: 'success',
            heightAuto: false
        }),

        loading ? (<LoadingBox />)
            : error ? (<MessageBox variant="danger">{error}</MessageBox>)
                : (<div>
                    <Helmet><title>{topic.name}</title></Helmet>
                    <h1 className="text-center" >{topic.name}</h1>
                    <Row>
                        <Col></Col>
                        <Col><Image className="img-topic" src={topic.image} alt={topic.name} ></Image></Col>
                        <Col></Col>
                    </Row>

                    <h5 className="text-center mt-2 mb-3" >{topic.description}</h5>

                    <Card className="shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Text>
                                {topic.content}
                            </Card.Text>
                            <Row>
                                <Col className="col-sm-2">
                                    <Card.Link href="#">Comentar</Card.Link>
                                    <Card.Link href="#">Calificar</Card.Link>
                                </Col>
                                <Col className="col-sm-8"></Col>
                                <Col className="4"><Rating rating={topic.rating} />
                                    <Reviews numReviews={topic.numReviews} /></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>)
    )
}

export default TopicScreen;