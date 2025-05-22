import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMap, 
  faGlobe, 
  faCompass, 
  faLocationDot,
  faEarth
} from '@fortawesome/free-solid-svg-icons';

const MappingDisplay = ({ id }) => {
  const icons = [faMap, faGlobe, faCompass, faLocationDot, faEarth];
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <div key={id}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ width: '20%', padding: '1rem', verticalAlign: 'middle', textAlign: 'center' }}>
              <FontAwesomeIcon icon={randomIcon} size="3x" />
            </td>
            <td style={{ width: '80%', padding: '1rem' }}>
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td>
                      <strong>Name: </strong>
                      <slot name="mapNameSlot"></slot>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Description: </strong>
                      <slot name="mapDescSlot"></slot>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MappingDisplay;

