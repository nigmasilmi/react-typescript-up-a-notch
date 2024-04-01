import { type ReactNode } from "react";
import { Goal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        {" "}
        <p>You have no goals yet</p>{" "}
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        There is some goals to complete first
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((gl) => (
          <li key={gl.id}>
            <CourseGoal title={gl.title} onDelete={onDeleteGoal} id={gl.id}>
              <p>{gl.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
