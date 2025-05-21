import React, { useState, useEffect } from 'react';
import Liferay from '../../util/Liferay';

const LiferayOn = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleACETClick = () => {
            setCount(prevCount => prevCount + 1);
        };

        Liferay.on('ACET-Click', handleACETClick);

        // Cleanup function to remove the event listener
        return () => {
            Liferay.detach('ACET-Click', handleACETClick);
        };
    }, []);

    return (
        <div>
            Current Count: {count}
        </div>
    );
};

export default LiferayOn;
