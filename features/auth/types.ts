export type Login = {
  email: string;
  password: string;
};

export type Signup = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export interface User {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
  role: "user" | "admin";
  status: "active" | "inactive";
  bio?: string;

  isVerified?: boolean;

  createdAt: string;
  updatedAt: string;
}
