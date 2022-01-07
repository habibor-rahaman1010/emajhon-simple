import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuthProvider from '../../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuthProvider();
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return (
                    user.photoURL || user.email ? children : <Redirect
                        to={{
                            pathname: '/login',
                            state: {
                                from: location
                            }
                        }}
                    >

                    </Redirect>
                )
            }}
        >

        </Route>
    );
};

export default PrivateRoute;