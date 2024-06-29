import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const nav = useNavigate()

    const [fields, setFields] = useState({
        email: '',
        password: ''
    });

    const onChang = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }
    const submitHandle = async (e) => {
        e.preventDefault();
        await fetch('https://jwt-backend-hb2j.onrender.com/api/login', {
        // await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: fields.email,
                password: fields.password,
            })
        }).then(async (res) => {
            res = await res.json()
            if (res.success == true) {
                localStorage.setItem("authToken", res.authToken)
                console.log(res.check);
                nav('/')
            }
            else if (res.success == false) {
                alert('Invalid details')
            }

            console.log('data sent');
        }).catch((error) => {
            console.log('data not sent', error);
        })
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Login Page</h2>
                                <form onSubmit={submitHandle}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={fields.email}
                                            onChange={onChang}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={fields.password}
                                            onChange={onChang}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;