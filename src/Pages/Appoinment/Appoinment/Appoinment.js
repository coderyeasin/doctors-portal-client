import React from 'react';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appoinment = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader value={value} setValue={setValue}></AppoinmentHeader>
            <AvailableAppoinments date={value}></AvailableAppoinments>
        </div>
    );
};

export default Appoinment;