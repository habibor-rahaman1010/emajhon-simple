import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuthProvider from '../../Hooks/UseAuth';
import { getAuth, updateProfile } from "firebase/auth";

const Registration = () => {
    const { setError, googleSignIn, githubSignIn, createCoustomUser } = useAuthProvider();
    // coustom user creation sate....
    const [email, setEmail] = useState('')
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    // this is googlr handle click..
    const handleClickGoogle = () => {
        googleSignIn()
            .then(() => {
                history.push(redirect_uri)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    //github sign in
    const handleClickGithub = () => {
        githubSignIn()
            .then(() => {
                history.push(redirect_uri)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }


    // this is my coustiom authentication here....
    const handleRegistration = (e) => {
        e.preventDefault();
        handleCreateCoustomUser(email, password);
    }
    // get user nmae
    const handleGetName = (e) => {
        const name = e.target.value;
        setName(name);
    }

    // get user Email
    const handleGetEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    // get user Password
    const handleGetPassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    // get user Re-Password
    const handleGetNameRePassword = (e) => {
        const repassword = e.target.value;
        setRepassword(repassword);
    }

    // this function cretae an user....
    const handleCreateCoustomUser = (email, password) => {
        createCoustomUser(email, password)
            .then(() => {
                history.push(redirect_uri)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })

    }


    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName: name
    }).then(() => {
        return
    }).catch((error) => {
        return
    });


    return (
        <div className='mt-5'>
            <form onSubmit={handleRegistration} className='w-25 m-auto'>
                <h2 className='mb-5'>This is my reistration </h2>
                <div className="mb-3 row ">
                    <label htmlFor="staticName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleGetName} type="text" className="form-control" id="staticName" placeholder='Your Name' required />
                    </div>
                </div>
                <div className="mb-3 row ">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleGetEmail} type="email" className="form-control" id="staticEmail" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handleGetPassword} type="password" className="form-control" id="inputPassword" placeholder='Your Password' required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handleGetNameRePassword} type="password" className="form-control" id="inputRePassword" placeholder='Re Enter Your Password' required />
                    </div>
                </div>

                <button className='btn btn-success' type='submit'>Registration Now</button> <br /> <br />
                <Link to='/login'> Are you already registered?</Link>
            </form>

            {/* modal  */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Facebook Button</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h4>Developper is still working yet! 💻 ⌨️ 🖥</h4>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-4 w-25 m-auto'>
                <button onClick={handleClickGoogle} className='btn btn-primary'>Google Sign In</button> &nbsp; &nbsp;
                <button onClick={handleClickGithub} className='btn btn-secondary'>Github Sign in </button> &nbsp; &nbsp;
                <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">Facebook Sign in </button> <br /> <br />
            </div>
        </div>
    );
};

export default Registration;