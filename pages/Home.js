import { useSelector } from "react-redux";
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
  const restaurants = useSelector((state) => state.restaurant.restaurants);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} />
      ))}
    </div>
  );
}
