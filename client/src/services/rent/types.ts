import { Rent } from "@/types";

export type GetAllRentsResponseType = {
  items: Rent[];
  message: string;
};

export type GetByIdRentResponseType = {
  item: Rent;
  message: string;
};

export type RentRequestPayload = {
  name: string;
  description: string;
  fuel: number;
  gearBox: string;
  capacity: number;
  price: number;
  discount: number;
  images?: File[];
  categoryId: string;
  pickUpLocation: string;
  dropOffLocations: string[];
  showInRecommendation: boolean;
};
