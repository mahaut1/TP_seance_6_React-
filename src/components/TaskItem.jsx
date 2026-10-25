export default function TaskItem({ tache, onBasculer, onSupprimer }) {
  return (
    <li className="element-tache">
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
      <button
        type="button"
        className="bouton-supprimer"
        onClick={() => onSupprimer(tache.id)}
      >
        Supprimer
      </button>
    </li>
  );
}
