import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuthProvider from '../../Hooks/UseAuth';

const Login = () => {
    const { setError, googleSignIn, githubSignIn } = useAuthProvider();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleClickGoogle = () => {
        googleSignIn()
            .then(() => {
                history.push(redirect_uri);
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

    return (
        <div className='mt-5'>
            <form className='w-25 m-auto'>
                <h2 className='mb-5'>Hey, Please Login! </h2>

                <div className="mb-3 row ">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticEmail" placeholder="Your Email" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder='Your Password' />
                    </div>
                </div>

                <button className='btn btn-success' type='submit'>Login Now</button>
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
                <Link to='/registration'> Are you new user?</Link>
            </div>

        </div>
    );
};

export default Login;