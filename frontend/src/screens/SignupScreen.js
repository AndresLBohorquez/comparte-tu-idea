import { useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function SignupScreen() {
    const { search } = useLocation;
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    return (
        <Container className="container d-flex flex-column">
            <Helmet><title>Comparte tu idea</title></Helmet>
            <Row className="row align-items-center justify-content-center no-gutters min-vh-100">
                <Col className="col-lg-5 col-md-8 py-8 py-xl-0">
                    <Card classNameName="card shadow">
                        <Card.Body className="card-body p-6">
                            <div className="mb-4">
                                <h2 className="mb-1">Registrarse</h2>

                                <hr className="my-4" />

                                <span>¿Ya tienes una cuenta? {' '}
                                    <Link to="/signin" className="ml-1 decoration-none-link">Iniciar Sesión</Link></span>
                            </div>
                            <Form >
                                <Form.Group className="form-group" controlId="name">
                                    <Form.Label className="form-label">Nombre Completo</Form.Label>
                                    <Form.Control type="text" className="form-control" placeholder="Nombre Completo" required />
                                </Form.Group>

                                <Form.Group className="form-group" controlId="email">
                                    <Form.Label className="form-label">Correo</Form.Label>
                                    <Form.Control type="email" className="form-control" placeholder="mail@mail.com" required />
                                </Form.Group>

                                <Form.Group className="form-group" controlId="password">
                                    <Form.Label className="form-label">Contraseña</Form.Label>
                                    <Form.Control type="password" className="form-control" placeholder="************" required />
                                </Form.Group>

                                <Form.Group className="form-group mt-2">
                                    <Row>
                                        <Col className="col-1 mt-2">
                                            <Form.Check type="checkbox" className="custom-control custom-checkbox" required />
                                        </Col>
                                        <Col className="col-11 mt-2">
                                            <span>Acepto <Link className="decoration-none-link" to={`/terms${redirect}`}>Términos de Servicio </Link>
                                                y <Link className="decoration-none-link" to={`/policy${redirect}`}> Política de Privacidad</Link>
                                            </span>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <div>
                                    <button type="submit" className="btn btn-outline-danger w-100 btn-block mt-4">
                                        Registrar
                                    </button>
                                </div>
                                <hr className="my-4" />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}