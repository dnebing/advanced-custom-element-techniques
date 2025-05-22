import React, { useState, useEffect, useRef } from 'react';

const MappingSlots = ({ isEditMode, id, bgImageId }) => {
    const isEdit = isEditMode === true || isEditMode === 'true';
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const nameSlotRef = useRef(null);
    const descSlotRef = useRef(null);
    const imageSlotRef = useRef(null);

    useEffect(() => {
        const getSlotText = (slotEl) => {
            if (!slotEl) return '';
            const assigned = slotEl.assignedElements({ flatten: true });
            return assigned.map(el => el.textContent || '').join(' ').trim();
        };

        const updateStateFromSlots = () => {
            setName(getSlotText(nameSlotRef.current));
            setDescription(getSlotText(descSlotRef.current));
        };

        updateStateFromSlots(); // Initial load

        const observer = new MutationObserver(() => {
            updateStateFromSlots();
        });

        const observeSlotElements = (slotEl) => {
            if (!slotEl) return;
            const assigned = slotEl.assignedElements({ flatten: true });
            assigned.forEach(el => {
                observer.observe(el, {
                    characterData: true,
                    childList: true,
                    subtree: true,
                });
            });
        };

        observeSlotElements(nameSlotRef.current);
        observeSlotElements(descSlotRef.current);

        return () => {
            observer.disconnect();
        };
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
                    <div data-lfr-background-image-id={bgImageId}>
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MappingSlots;
