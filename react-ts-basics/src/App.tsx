import { Header } from "./components/Header";
import headerImage from "/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type Goal = { id: number; title: string; description: string };

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal(goal: string, description: string) {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: goal,
        description,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter((gl) => gl.id !== id);
    });
  }

  return (
    <main>
      <Header src={headerImage} alt="A list of goals"></Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
