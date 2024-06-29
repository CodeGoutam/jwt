import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [fields, setFields] = useState({
        email: '',
        password: ''
    });
    const nav = useNavigate()

    const onChang = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }
    const submitHandle = async (e) => {
        e.preventDefault();
        const res = await fetch('https://jwt-backend-hb2j.onrender.com/api/signup', {
        // const res = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: fields.email,
                password: fields.password,
            })
        })
        const resJson = await res.json()
        console.log(resJson);
        if (resJson.success === true) {
            localStorage.setItem("authToken", resJson.authToken)
            nav('/')
        }
        else {
            alert("invalid details")
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">SignUp Page</h2>
                                <form onSubmit={submitHandle} method="POST">
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
                                    <button type="submit" className="btn btn-primary btn-block">SignUp</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;