import React from 'react';
import Liferay from '../../util/Liferay';

const LiferayFire = () => {
    const handleClick = () => {
        Liferay.fire('ACET-Click', {});
    };

    return (
        <button onClick={handleClick}>
            Increment Counter
        </button>
    );
};

export default LiferayFire;
