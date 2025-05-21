import React from 'react';

const ModeDisplay = ({ isEditMode = false }) => {
    console.log("isEditMode", isEditMode);
    console.log("Boolean(isEditMode)", Boolean(isEditMode));
    console.log("typeof isEditMode", typeof isEditMode);

    return (
        <div>
            {isEditMode === true || isEditMode === "true" ? "Mode: Edit" : "Mode: View"}
        </div>
    );
};

export default ModeDisplay;
