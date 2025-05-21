import React, { useState, useEffect, useRef } from 'react';

const MappingSlots = ({ isEditMode, id, bgImageId }) => {
    const isEdit = isEditMode === true || isEditMode === 'true';
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const nameSlotRef = useRef<HTMLSlotElement>(null);
    const descSlotRef = useRef<HTMLSlotElement>(null);
    const imageSlotRef = useRef<HTMLSlotElement>(null);


    useEffect(() => {
        const getSlotContent = (slot, slotName) => {
            if (!slot) {
                console.log(`${slotName} slot is not found`);
                return;
            }
            const assigned = slot.assignedElements({ flatten: true });
            console.log(`${slotName} slot content:`);
            let content = '';
            assigned.forEach(el => {
                console.log(`-`, el.textContent)

                if (content === '') {
                    content = el.textContent;
                } else {
                    content += ` ${el.textContent}`;
                }
            });
            return content;
          };
      
          setName(getSlotContent(nameSlotRef.current, 'nameSlot'));
          setDescription(getSlotContent(descSlotRef.current, 'descSlot'));
          getSlotContent(imageSlotRef.current, 'imageSlot');
    }, []);
  
    return (
        <div key={id}>
            {isEdit ? (
                <div>
                    <slot name="nameSlot" ref={nameSlotRef}></slot><br />
                    <slot name="descSlot" ref={descSlotRef}></slot><br />
                    <slot name="imageSlot" ref={imageSlotRef}></slot>
                </div>
            ) : (
                <div className="mapping-slots">
                    <div style={{ border: '1px solid red' }}>
                        <slot name="nameSlot" ref={nameSlotRef}></slot><br />
                        <slot name="descSlot" ref={descSlotRef}></slot><br />
                        <slot name="imageSlot" ref={imageSlotRef}></slot>
                    </div>
                    <div
                        data-lfr-background-image-id={bgImageId}
                    >
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MappingSlots;



