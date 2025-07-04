import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [
    {
      id: 1,
      name: "Spicy Villa",
      cuisine: "Indian",
      rating: 4.5,
      image: "https://source.unsplash.com/featured/?indian-food",
      description: "Authentic Indian dishes with rich flavors.",
    },
    {
      id: 2,
      name: "Sushi Zen",
      cuisine: "Japanese",
      rating: 4.8,
      image: "https://source.unsplash.com/featured/?sushi",
      description: "Delicious sushi rolls and sashimi.",
    },
    {
      id: 3,
      name: "Pasta Palace",
      cuisine: "Italian",
      rating: 4.3,
      image: "https://source.unsplash.com/featured/?pasta",
      description: "Traditional Italian pasta and pizza.",
    },
  ],
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
});

export default restaurantSlice.reducer;
