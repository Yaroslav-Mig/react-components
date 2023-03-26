import { useState } from 'react';
import { faSignsPost, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Chip, { chipId } from './Chip';

interface ChipIconType {
  id: chipId;
  text: string;
  icon: IconDefinition;
  isActive: boolean;
}

const ChipState = () => {
  const [cities, setCities] = useState<ChipIconType[]>([
    { id: 1, text: 'London', icon: faSignsPost, isActive: false },
    { id: 2, text: 'Milan', icon: faSignsPost, isActive: false },
    { id: 3, text: 'Madrid', icon: faSignsPost, isActive: false },
    { id: 4, text: 'Paris', icon: faSignsPost, isActive: false },
    { id: 5, text: 'Berlin', icon: faSignsPost, isActive: false },
  ]);

  const changeActive = (id: chipId) => {
    const updatedCities = cities.map((city) =>
      city.id === id ? { ...city, isActive: !city.isActive } : city
    );
    setCities(updatedCities);
  };

  const removeChip = (id: chipId) => {
		const filteredCities = cities.filter((city) => city.id !== id);
		setCities(filteredCities);
  };

  const mappedCity = cities.map((city) => {
    return (
      <>
        <Chip
          key={city.id}
          id={city.id}
          text={city.text}
          isActive={city.isActive}
          withClose
          withIcon
          renderIcon={(props) => <FontAwesomeIcon icon={city.icon} size={props.size} />}
          onClickChip={changeActive}
          onCloseChip={removeChip}
        />
      </>
    );
  });

  return <>{mappedCity}</>;
};

export default ChipState;
