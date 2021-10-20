import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { isLoading, user } = useAuth();

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: {from: location}
                            }}
                        />
                )
            }
        />
    );
};

export default PrivateRoute;