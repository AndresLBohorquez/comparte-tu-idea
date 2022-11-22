import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import CardGroup from 'react-bootstrap/CardGroup';
import Reviews from './Reviews';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Topic(props) {
    const { topic } = props;
    return (
        <CardGroup className='card-sz'>
            <Card  key={topic.slug}>
                <Link to={`/topic/${topic.slug}`}>
                    <Card.Img className='topic-img' variant="top" src={topic.image} alt={topic.name} />
                    <Card.Title className="mg-ll">{topic.name}</Card.Title>
                </Link>
                <Card.Body>
                    <Card.Text className='card-text-sz text-break'>{topic.description}</Card.Text>
                    <Row>
                        <Col className='col-sm-7'>
                            <Rating rating={topic.rating} /><p className='rating-text text-muted'>({topic.rating})</p>
                        </Col>
                        <Col>
                            <Reviews numReviews={topic.numReviews} />
                        </Col>
                    </Row>



                </Card.Body>
            </Card>

        </CardGroup>
    )
}

export default Topic;



