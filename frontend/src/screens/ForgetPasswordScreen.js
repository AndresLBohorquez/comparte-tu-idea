import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";

export default function ForgetPasswordScreen() {
    return (
        <Container className="container d-flex flex-column">
            <Helmet><title>Comparte tu idea</title></Helmet>
            <Row className="row align-items-center justify-content-center no-gutters abs-center">
                <Col className="col-lg-5 col-md-8 py-8 py-xl-0">
                    <Card className="card shadow">
                        <Card.Body className="card-body p-6">
                            <div className="mb-4">
                                <h1 className="mb-1 font-weight-bold ">Olvidé mi Contraseña</h1>
                                <hr className="my-4" />
                            </div>
                            <Form>
                                <Form.Group className="form-group" controlId="email">
                                    <Form.Label className="form-label">Email</Form.Label>
                                    <Form.Control type="email" className="form-control" placeholder="email " required />
                                </Form.Group>
                                <div className="mb-3 mt-3">
                                    <Button type="submit" className="btn btn-outline-danger btn-block w-100">
                                        Recuperar Contraseña
                                    </Button>
                                </div>
                                <Row className="row">
                                    <Col className="col-9">
                                        <a href="/signin" className="decoration-none-link">Iniciar Sesión</a>
                                    </Col>
                                    <Col className="col-3">
                                        <a href="/" className="decoration-none-link">
                                            Inicio
                                        </a>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );

}