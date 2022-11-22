function LoginScreen() {
    return (<div>
        <div className="abs-center">
            <div className="col-lg-5 col-md-8 py-8 py-xl-0">
                <div className="card shadow ">
                    <div className="card-body p-6">
                        <div className="mb-4">
                            <div className="row">
                                <div className="col-9">
                                    <h2 className="mb-1">Iniciar Sesión</h2>
                                </div>
                                
                            </div>
                            <hr className="my-4" />
                            <span>¿Aún no tienes cuenta? <a href="/sign-up"
                                className="ml-1 decoration-none-link">Registrarse</a></span>
                        </div>
                        <form method="post">
                            <div className="form-group">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" id="username" className="form-control" name="username"
                                    placeholder="por favor ingrese su email" required />
                            </div>
                            <label for="password" className="form-label">Contraseña</label>
                            <input type="password" id="password" className="form-control" name="password"
                                placeholder="**************" required />

                            <div className="d-lg-flex justify-content-between align-items-center mb-4">
                                <div>
                                </div>
                                <div>
                                    <a className="decoration-none-link" href="/forget-password">¿Olvidó su
                                        contraseña?</a>
                                </div>
                            </div>
                            <div>

                                <button type="submit" className="btn btn-outline-danger btn-block w-100">Iniciar
                                    Sesión</button>
                            </div>
                            <hr className="my-4" />

                        </form>

                    </div>
                </div>
            </div>
        </div>

    </div>)
};

export default LoginScreen;