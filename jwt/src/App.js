import logo from './logo.svg';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
function App() {
    const nav = useNavigate()
    const btn = localStorage.getItem("authToken")
    const out = () => {
        localStorage.removeItem("authToken")
        nav('/')
    }
    return (
        <div className="p-2" style={{ height: '100vh' }}>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Home Page</h1>
                <div >
                    {!btn ? (
                        <Link className="btn btn-primary m-1" to="/login">Login</Link>
                    ) : (
                        <button className="btn btn-danger m-1" onClick={out}>Logout</button>
                    )}
                    {!btn && (
                        <Link className="btn btn-danger m-1" to="/signup">SignUp</Link>
                    )}
                </div>
            </div>
            {
                localStorage.getItem('authToken') ? <div className='d-flex justify-content-center align-items-center h-100'><p className='card btn bg-black text-bg-danger'>User is logged in ..</p></div> :
                    <div className='d-flex justify-content-center align-items-center h-100'><p className=''>Login or Create Account ..</p></div>
            }
        </div>
    );
}

export default App;
