import { Goal } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((gl) => (
        <li key={gl.id}>
          <CourseGoal title={gl.title} onDelete={onDeleteGoal} id={gl.id}>
            <p>{gl.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
