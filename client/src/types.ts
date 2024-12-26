export type User = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  isBlocked: boolean;
  role: UserRole;
  createdAt: string;
};

export type Location = {
  _id: string;
  createdAt: string;
  name: string;
};

export type Rent = {
  _id: string;
  name: string;
  description: string;
  currency: string;
  fuel: number;
  gearBox: string;
  createdAt: string;
  capacity: number;
  price: number;
  discount: number;
  images: string[];
  category: Category;
  dropOffLocations: Location[];
  pickUpLocation: Location;
  showInRecommendation: boolean;
};

export type Category = {
  _id: string;
  createdAt: string;
  name: string;
  count: number;
};

export type SelectOption = {
  value: string;
  label: string;
};

export enum UserRole {
  Admin = "admin",
  User = "user",
}
