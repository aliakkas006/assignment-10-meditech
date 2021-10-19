import React from 'react';
import { useParams } from 'react-router';

const Servicing = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>This is servicing id: {id} </h2>
        </div>
    );
};

export default Servicing;