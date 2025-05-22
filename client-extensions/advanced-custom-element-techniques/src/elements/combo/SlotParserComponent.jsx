import React, { useEffect, useRef } from 'react';
import { useMapping } from './MappingContext';

const SlotParserComponent = ({ isEditMode }) => {
  const nameSlotRef = useRef(null);
  const descSlotRef = useRef(null);
  const { setName, setDescription } = useMapping();

  useEffect(() => {
    const getSlotText = (slot) => {
      const assigned = slot?.assignedElements({ flatten: true }) || [];
      return assigned.map(el => el.textContent || '').join(' ').trim();
    };

    const update = () => {
      setName(getSlotText(nameSlotRef.current));
      setDescription(getSlotText(descSlotRef.current));
    };

    const observer = new MutationObserver(update);
    const observeSlot = (slot) => {
      const assigned = slot?.assignedElements({ flatten: true }) || [];
      assigned.forEach(el =>
        observer.observe(el, {
          characterData: true,
          childList: true,
          subtree: true,
        })
      );
    };

    update();
    observeSlot(nameSlotRef.current);
    observeSlot(descSlotRef.current);

    return () => observer.disconnect();
  }, [setName, setDescription]);

  return (
    <>
      {isEditMode ? (
        <>
          <slot name="nameSlot" ref={nameSlotRef}></slot><br/>
          <slot name="descSlot" ref={descSlotRef}></slot>
        </>
      ) : (
        <div style={{ visibility: 'hidden' }}>
          <slot name="nameSlot" ref={nameSlotRef}></slot><br />
          <slot name="descSlot" ref={descSlotRef}></slot>
        </div>
      )}
    </>
  );
};

export default SlotParserComponent;
