import React, { useEffect, useRef } from 'react';
import { useMapping } from './MappingContext';

const SlotParserComponent = () => {
  const nameSlotRef = useRef(null);
  const descSlotRef = useRef(null);
  const imageSlotRef = useRef(null);

  const { setName, setDescription, setImageUrl } = useMapping();

  useEffect(() => {
    const getSlotText = (slot) =>
      slot?.assignedElements({ flatten: true }).map(el => el.textContent || '').join(' ').trim() || '';

    const getImageSrc = (slot) => {
      const assigned = slot?.assignedElements({ flatten: true }) || [];
      const img = assigned.find(el => el.tagName === 'IMG');
      return img?.getAttribute('src') || '';
    };

    const update = () => {
      setName(getSlotText(nameSlotRef.current));
      setDescription(getSlotText(descSlotRef.current));
      setImageUrl(getImageSrc(imageSlotRef.current));
    };

    update();

    const observer = new MutationObserver(update);

    const observeAssignedElements = (slotRef) => {
      const assigned = slotRef.current?.assignedElements({ flatten: true }) || [];
      assigned.forEach(el =>
        observer.observe(el, {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true,
        })
      );
    };

    [nameSlotRef, descSlotRef, imageSlotRef].forEach(observeAssignedElements);

    return () => observer.disconnect();
  }, [setName, setDescription, setImageUrl]);

  return (
    <>
      <slot name="nameSlot" ref={nameSlotRef}></slot>
      <slot name="descSlot" ref={descSlotRef}></slot>
      <slot name="imageSlot" ref={imageSlotRef}></slot>
    </>
  );
};

export default SlotParserComponent;
