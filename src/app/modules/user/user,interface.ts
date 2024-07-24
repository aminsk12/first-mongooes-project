

export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: "admin" | "student" | "faculty";
  status:'in-progress'| 'block',
  isDelited: boolean;
};


// export type NewUser = {
//   id: string;
//   password: string;
//   role: string;

// }