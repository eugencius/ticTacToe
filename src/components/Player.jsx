export default function Player({ initialName, symbol }) {
  return (
    <li>
      <span className="player">
        {initialName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Save</button>
    </li>
  );
}
