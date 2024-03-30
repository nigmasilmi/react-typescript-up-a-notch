import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, description: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const inputGoalRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = inputGoalRef.current!.value;
    const enteredDescription = inputDescriptionRef.current!.value;

    onAddGoal(enteredGoal, enteredDescription);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="course-goal">Your goal</label>
        <input type="text" id="course-goal" ref={inputGoalRef} />
      </p>
      <p>
        <label htmlFor="goal-description">Add a description</label>
        <input type="text" id="goal-description" ref={inputDescriptionRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
