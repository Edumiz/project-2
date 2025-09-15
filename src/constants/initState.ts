import type { User } from "@/types/components/user";

export const initialState: User = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: 0,
  gender: "",
  birthDate: "",
  address: {
    address: "",
    city: "",
    state: "",
    postalCode: "",
  },
};
