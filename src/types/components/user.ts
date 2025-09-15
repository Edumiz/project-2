export interface User {
    id: string;
    firstName: string;
    lastName: string;
    age: number | string;
    gender: string;
    email: string;
    phone: string;
    birthDate: string;
    image?: string;
    address: Address;
}

interface Address {
    address: string;
    city: string;
    state: string;
    postalCode: string;
}