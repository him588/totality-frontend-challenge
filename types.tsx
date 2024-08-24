export type IconProp = {
  h: number;
  w: number;
  c: string;
};
export type user = {
  name: string;
  email: string;
  password: string;
  cart: properties[];
};

export type properties = {
  id: string;
  title: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  };
  type: "house" | "commercial" | "for rent";
  bedroom: "2-4" | "4-6" | "6-8";
  amenities: string[];
  images: string[];
  area: string;
};
