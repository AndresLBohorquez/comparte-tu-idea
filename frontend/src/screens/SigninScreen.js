import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet-async";
import { Axios } from "axios";
import { useState } from "react";

export default function SigninScreen() {
    const { search } = useLocation;
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const baseURL = "http://localhost:5001";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Axios.post(`${baseURL}/api/users/signin`, {
                email,
                password,
            })
            console.log(data);
        } catch (err) {

        }
    }

    return (
        <div>
            <Helmet><title>Comparte tu idea</title></Helmet>
            <div className="abs-center">
                <Col className="col-lg-5 col-md-8 py-8 py-xl-0">
                    <Card className="card shadow ">
                        <Card.Body className="card-body p-6">
                            <div className="mb-4">
                                <Row className="row">
                                    <Col className="col-9">
                                        <h2 className="mb-1">Iniciar Sesión</h2>
                                    </Col>
                                </Row>
                                <hr className="my-4" />
                                <span>¿Aún no tienes cuenta?
                                    <Link className="ml-1 decoration-none-link" to={`/signup?redirect=${redirect}`}>{' '}Registrarse</Link>
                                </span>
                            </div>
                            <Form onSubmit={submitHandler}>
                                <Form.Group className="form-group" controlId="email">
                                    <Form.Label className="form-label">Email</Form.Label>
                                    <Form.Control type="email" placeholder="por favor ingrese su email" required onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="form-group" controlId="password">
                                    <Form.Label className="form-label">Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="**************" required onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>

                                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                                    <div>
                                    </div>
                                    <div>
                                        <Link className="ml-1 decoration-none-link" to={`/forget-password?redirect=${redirect}`}>{' '}¿Olvidó su
                                            contraseña?</Link>
                                    </div>
                                </div>
                                <div>
                                    <Button type="submit" className="btn btn-outline-danger btn-block w-100">Iniciar
                                        Sesión</Button>
                                </div>
                                <hr className="my-4" />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
}
