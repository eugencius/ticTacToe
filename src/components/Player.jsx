import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let usernameDisplay = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    usernameDisplay = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {usernameDisplay}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
