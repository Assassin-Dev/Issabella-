function Auth() {
    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">Sign UP</h1>
                    <form className="auth-form">

                        <div className="form-group">
                            <label className="for-label" htmlFor="Email">Email</label>
                            <input type="Email" placeholder="Email" className="form-input" id="email" />
                        </div>

                        <div className="form-group">
                            <label className="for-label" htmlFor="Password">Password</label>
                            <input type="Password" placeholder="Password" className="form-input" id="password" />
                        </div>

                        <button type="Submit" className="btn-for-signup">Sign UP</button>
                    </form>


                    <div className="auth-switch">
                        <p>Already have an account ?</p> <span>Login</span>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default Auth