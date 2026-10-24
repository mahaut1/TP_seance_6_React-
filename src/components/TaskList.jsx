import TaskItem from "./TaskItem.jsx";

export default function TaskList({ taches, onBasculer }) {
  return (
    <ul className="liste-taches">
       {taches.map((tache) => (
        <TaskItem 
        key={tache.id}
         tache={tache}
        onBasculer={onBasculer}
          />
      ))}
    </ul>
  );
}
