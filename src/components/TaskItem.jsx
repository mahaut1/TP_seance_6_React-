export default function TaskItem({ tache, onBasculer }) {
  return (
    <li>
     <label>
        <input
          type="checkbox"
          checked={tache.terminee}
          onChange={() => onBasculer(tache.id)}
        />
        <span
          style={{
            textDecoration: tache.terminee ? "line-through" : "none",
          }}
        >
          {tache.texte}
        </span>
      </label>
    </li>
  );
}
