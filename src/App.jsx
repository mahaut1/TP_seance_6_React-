import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

const tachesInitiales = [
  { id: 1, texte: "Réviser React", terminee: false },
  { id: 2, texte: "Préparer le TP", terminee: true },
  { id: 3, texte: "Tester l'application", terminee: false },
];

export default function App() {
  const [taches, setTaches] = useState(tachesInitiales);
  const tachesRestantes = taches.filter(
    (tache) => !tache.terminee
  );

  function ajouterTache(texte) {
    const nouvelleTache = {
      id: crypto.randomUUID(),
      texte,
      terminee: false,
    };

    setTaches((precedentes) => [...precedentes, nouvelleTache]);
  }

  function basculerTache(id) {
    setTaches((precedentes) =>
      precedentes.map((tache) =>
        tache.id === id
          ? { ...tache, terminee: !tache.terminee }
          : tache
      )
    );
  }

  return (
    <main className="application">
      <h1>Mes tâches</h1>
      <p>
        {tachesRestantes.length} tâches restantes sur {taches.length}
      </p>
      <TaskForm onAjouter={ajouterTache} />
      <TaskList taches={taches} onBasculer={basculerTache} />
    </main>
  );
}
