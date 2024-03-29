import CourseGoal from "./components/CourseGoal";
import { Header } from "./components/Header";
import headerImage from "../public/goals.jpg";
export default function App() {
  return (
    <main>
      <Header src={headerImage} alt="A list of goals"></Header>
      <CourseGoal title={"do something"}>
        <p>some description</p>
      </CourseGoal>
    </main>
  );
}
