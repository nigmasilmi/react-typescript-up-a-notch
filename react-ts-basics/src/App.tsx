import CourseGoal from "./components/CourseGoal";
import { Header } from "./components/Header";
import headerImage from "../public/goals.jpg";
import { useState } from "react";

type Goal = { id: number; title: string; description: string };

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: 1,
        title: "temporary",
        description: "some dummy description",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header src={headerImage} alt="A list of goals"></Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((gl) => (
          <li key={gl.id}>
            <CourseGoal title={gl.title}>
              <p>{gl.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
