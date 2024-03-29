// special decorator to indicate to the compiler indicating that it's safe be removed
// from the build
import { FC, type PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }
type CourseGoalProps = PropsWithChildren<{ title: string }>;

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>delete</button>
//     </article>
//   );
// }

const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>delete</button>
    </article>
  );
};

export default CourseGoal;
