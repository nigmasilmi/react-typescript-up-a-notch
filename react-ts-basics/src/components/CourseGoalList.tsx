import { Goal } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = { goals: Goal[] };

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((gl) => (
        <li key={gl.id}>
          <CourseGoal title={gl.title}>
            <p>{gl.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
