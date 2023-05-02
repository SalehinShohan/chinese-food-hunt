import React from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const allData = useLoaderData();
    console.log(allData);
    

    // const newData = allData.find((detail) => detail.id === chefInfoId);
    

    return (
        <div>
            <h2></h2>
        </div>
    );
};

export default ViewDetails;