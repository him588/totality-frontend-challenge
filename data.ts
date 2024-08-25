import { properties } from "./types";
export const Properties: properties[] = [
  {
    id: "1",
    title: "Luxury Villa in Goa",
    description:
      "A beautiful luxury villa located near the beach with modern amenities.",
    price: 11500,
    address: {
      street: "123 Beach Road",
      city: "Goa",
      state: "Goa",
      country: "India",
    },
    type: "house",
    bedroom: "4-6",
    amenities: ["Pool", "Garden", "Garage", "Sea View"],
    images: [
      "https://images.unsplash.com/photo-1722491945502-abb7235593f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfDF8MHx8fDA%3D",
    ],
    area: "3500 sqft",
  },
  {
    id: "2",
    title: "Commercial Space in Mumbai",
    description: "A prime commercial space located in the heart of Mumbai.",
    price: 5000,
    address: {
      street: "456 Business Avenue",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    type: "commercial",
    bedroom: "2-4",
    amenities: ["Parking", "Elevator", "24/7 Security"],
    images: [
      "https://images.unsplash.com/photo-1719299224357-19232e85e6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvcGVydGllc3xlbnwwfDF8MHx8fDA%3D",
    ],
    area: "5000 sqft",
  },
  {
    id: "3",
    title: "Apartment for Rent in Bangalore",
    description:
      "A spacious apartment with all modern amenities available for rent.",
    price: 3500,
    address: {
      street: "789 IT Park Road",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
    type: "for rent",
    bedroom: "2-4",
    amenities: ["Gym", "Swimming Pool", "Power Backup"],
    images: [
      "https://images.unsplash.com/photo-1719294608301-efa8ecd6c9a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfDF8MHx8fDA%3D",
    ],
    area: "1800 sqft",
  },
  {
    id: "4",
    title: "Penthouse in Pune",
    description:
      "A luxurious penthouse with stunning city views in the heart of Pune.",
    price: 8000,
    address: {
      street: "101 Skyline Tower",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    type: "house",
    bedroom: "4-6",
    amenities: ["Rooftop Terrace", "Private Elevator", "Gym"],
    images: [
      "https://plus.unsplash.com/premium_photo-1676968002512-3eac82b1d847?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb3BlcnRpZXN8ZW58MHwxfDB8fHww",
    ],
    area: "4000 sqft",
  },
  {
    id: "5",
    title: "Office Space in Hyderabad",
    description:
      "Modern office space in a prime location suitable for IT companies.",
    price: 4500,
    address: {
      street: "203 Tech Park",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
    },
    type: "commercial",
    bedroom: "2-4",
    amenities: ["Conference Room", "Parking", "24/7 Security"],
    images: [
      "https://images.unsplash.com/photo-1719294007595-969dd9ed6c28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb3BlcnRpZXN8ZW58MHwxfDB8fHww",
    ],
    area: "4500 sqft",
  },
  {
    id: "6",
    title: "Beach House in Kerala",
    description:
      "A serene beach house with direct access to the beach and a private garden.",
    price: 7200,
    address: {
      street: "56 Ocean Drive",
      city: "Kochi",
      state: "Kerala",
      country: "India",
    },
    type: "house",
    bedroom: "4-6",
    amenities: ["Private Beach", "Garden", "Balcony"],
    images: [
      "https://images.unsplash.com/photo-1719297491228-e65eda8d5236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb3BlcnRpZXN8ZW58MHwxfDB8fHww",
    ],
    area: "3000 sqft",
  },
  {
    id: "7",
    title: "Luxury Apartment in Delhi",
    description:
      "A modern luxury apartment located in the upscale area of South Delhi.",
    price: 11750,
    address: {
      street: "789 Green Park",
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    type: "house",
    bedroom: "4-6",
    amenities: ["Gym", "Swimming Pool", "24/7 Security"],
    images: [
      "https://images.unsplash.com/photo-1722291238946-553d9a9aff25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb3BlcnRpZXN8ZW58MHwxfDB8fHww",
    ],
    area: "2500 sqft",
  },
  {
    id: "8",
    title: "Commercial Shop in Chennai",
    description:
      "A spacious shop in a bustling market area, perfect for retail business.",
    price: 2500,
    address: {
      street: "12 Market Road",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    type: "commercial",
    bedroom: "2-4",
    amenities: ["Parking", "High Footfall", "Storage Area"],
    images: [
      "https://plus.unsplash.com/premium_photo-1683586217725-552b9f9abaa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHByb3BlcnRpZXN8ZW58MHwxfDB8fHww",
    ],
    area: "3000 sqft",
  },
  {
    id: "9",
    title: "Farmhouse in Jaipur",
    description:
      "A beautiful farmhouse with extensive farmland and a serene environment.",
    price: 8700,
    address: {
      street: "456 Farm Road",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
    type: "house",
    bedroom: "6-8",
    amenities: ["Large Farm Area", "Garden", "Swimming Pool"],
    images: [
      "https://plus.unsplash.com/premium_photo-1683917068753-42d5abcc3ce4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHByb3BlcnRpZXN8ZW58MHwxfDB8fHww",
    ],
    area: "5000 sqft",
  },
  {
    id: "10",
    title: "Studio Apartment in Kolkata",
    description:
      "A cozy studio apartment in a central location, ideal for single professionals.",
    price: 7500,
    address: {
      street: "22 Park Street",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    type: "house",
    bedroom: "2-4",
    amenities: ["24/7 Security", "Balcony", "Close to Metro"],
    images: [
      "https://images.unsplash.com/photo-1563271978-de56ca503913?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwcm9wZXJ0aWVzfGVufDB8MXwwfHx8MA%3D%3D",
    ],
    area: "800 sqft",
  },
  {
    id: "11",
    title: "Warehouse in Ahmedabad",
    description:
      "A large warehouse space ideal for storage and distribution businesses.",
    price: 2200,
    address: {
      street: "89 Industrial Road",
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
    },
    type: "commercial",
    bedroom: "6-8",
    amenities: ["Loading Dock", "24/7 Security", "Parking"],
    images: [
      "https://plus.unsplash.com/premium_photo-1689609950071-af404daa58a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxwcm9wZXJ0aWVzfGVufDB8MXwwfHx8MA%3D%3D",
    ],
    area: "8000 sqft",
  },
  {
    id: "12",
    title: "Residential Plot in Lucknow",
    description:
      "A residential plot located in a developing area, perfect for investment.",
    price: 5000,
    address: {
      street: "35 New Colony",
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
    },
    type: "house",
    bedroom: "2-4",
    amenities: ["Close to Schools", "Park View", "Well Connected"],
    images: [
      "https://plus.unsplash.com/premium_photo-1683296356284-1cd91f8f7807?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxwcm9wZXJ0aWVzfGVufDB8MXwwfHx8MA%3D%3D",
    ],
    area: "1500 sqft",
  },
  {
    id: "13",
    title: "Serviced Apartment in Noida",
    description:
      "A fully furnished serviced apartment ideal for short-term stays.",
    price: 11000,
    address: {
      street: "201 Tech City",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
    },
    type: "for rent",
    bedroom: "2-4",
    amenities: ["Housekeeping", "Gym", "Swimming Pool"],
    images: [
      "https://images.unsplash.com/photo-1683491360986-6a0bb5182bf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwcm9wZXJ0aWVzfGVufDB8MXwwfHx8MA%3D%3D",
    ],
    area: "1200 sqft",
  },
  {
    id: "14",
    title: "Villa in Udaipur",
    description:
      "A beautiful villa with a view of the lake, ideal for a peaceful lifestyle.",
    price: 95000,
    address: {
      street: "78 Lake View",
      city: "Udaipur",
      state: "Rajasthan",
      country: "India",
    },
    type: "house",
    bedroom: "4-6",
    amenities: ["Lake View", "Garden", "Terrace"],
    images: [
      "https://images.unsplash.com/photo-1631215320889-7cf5eb3224f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxwcm9wZXJ0aWVzfGVufDB8MXwwfHx8MA%3D%3D",
    ],
    area: "3500 sqft",
  },
  {
    id: "15",
    title: "Retail Shop in Surat",
    description:
      "A prime retail shop in a busy shopping district, perfect for high-end brands.",
    price: 3000,
    address: {
      street: "56 Diamond Street",
      city: "Surat",
      state: "Gujarat",
      country: "India",
    },
    type: "commercial",
    bedroom: "2-4",
    amenities: ["High Footfall", "Modern Interior", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1639060589553-77c8c2227ac5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxwcm9wZXJ0aWVzfGVufDB8MXwwfHx8MA%3D%3D",
    ],
    area: "2000 sqft",
  },
  {
    id: "16",
    title: "Apartment for Rent in Chandigarh",
    description:
      "A spacious apartment with all modern amenities available for rent.",
    price: 40000,
    address: {
      street: "50 Sector 17",
      city: "Chandigarh",
      state: "Chandigarh",
      country: "India",
    },
    type: "for rent",
    bedroom: "2-4",
    amenities: ["Gym", "Swimming Pool", "Power Backup"],
    images: [
      "https://images.unsplash.com/photo-1522759531475-b05ba50ae2b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxwcm9wZXJ0aWVzfGVufDB8MXwwfHx8MA%3D%3D",
    ],
    area: "1800 sqft",
  },
];
