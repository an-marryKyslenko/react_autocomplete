import { memo} from 'react';
import { Person } from '../../types/Person';

interface Props {
  people: Person[];
  onSelected: (person: Person) => void;
}

export const DropdownMenu: React.FC<Props> = memo(({ people, onSelected }) => (
    <div className="dropdown-menu" role="menu" data-cy="suggestions-list">
      <div className="dropdown-content">
        {people.map(person => (
          <div
            key={person.name}
            className="dropdown-item"
            style={{ pointerEvents: 'auto' }}
            data-cy="suggestion-item"
            onClick={() => onSelected(person)}
          >
            <p className="has-text-link">{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
);
