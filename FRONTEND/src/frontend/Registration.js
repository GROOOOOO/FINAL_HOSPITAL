import React, {
    useEffect,
    useState,
} from 'react';

import {
    Link,
    useNavigate,
} from 'react-router-dom';

import logo from './PNCS.png'; // Import your logo image

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [confirm_password, setConfpass] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            // localStorage.clear();
            navigate('/register');
        }
    }, [])

    async function singup() {
        let item = { name, email, password, confirm_password }

        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        navigate('/login');
        console.log(result);
    }
    return (
        <>
            <div className="container veiw-h">
                <div className="account-input">
                    <div className="col-md-4 m-auto bg-white rounded p-5">

                        <div className="text-center mt-4">

                            <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
                            <h4 style={{ color: 'green' }}><></>PNC-HOSPITAL</h4>
                        </div>

                        <div className="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />

                        </div>
                        <div className="form-group mt-3">
                            <label for="email">Email Id</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

                        </div>
                        <div className="form-group mt-3">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPass(e.target.value)} placeholder="Password" />

                        </div>
                        <div className="form-group mt-3">
                            <label for="text">Role</label>
                            <input type="hidden" className="form-control" id="role" value={"user"} />

                        </div>
                        <div className="form-group mt-3">
                            <label for="confirm_password">Password</label>
                            <input type="password" className="form-control" id="confirm_password" value={confirm_password} onChange={(e) => setConfpass(e.target.value)} placeholder="Retype password" />

                        </div>

                        <div id="emailHelp" className="form-text">Have an account? <Link style={{ color: 'green' }} className="text-decoration-none" to={"/login"}>Login</Link></div>

                        <div className="d-grid mt-3">
                            <button type="button" onClick={singup} className="btn btn-success rounded-pill" name="register">Register</button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </>
    )
}

