import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();

  return (
    <ul>
      {timers.map((timer) => (
        <li key={`${timer.name}-${timer.duration}`}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}
