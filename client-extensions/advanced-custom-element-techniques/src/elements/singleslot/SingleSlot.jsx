import React from 'react';

const SingleSlot = () => {
    return (
        <div>
            <slot name="singleSlotName"></slot>
        </div>
    );
};

export default SingleSlot;
