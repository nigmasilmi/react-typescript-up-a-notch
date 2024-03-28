type Color = { red: number; green: number; blue: number };

type Shape = { sides: number; platonicSolid: string };

// a box has form and color, not one of those
let box: Color | Shape;

// merging the types
let box2: Color & Shape = {
  red: 55,
  green: 55,
  blue: 44,
  sides: 6,
  platonicSolid: "cube",
};

type Role = "admin" | "user" | "editor";

let userRole: Role = "admin";

// Type Guard
function performAction(action: string | number, role: Role) {
  // type checking
  if (role === "admin" && typeof action === "string") {
    console.log("isAdmin");
  }
}
