import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RestaurantDetails() {
  const { id } = useParams();
  const restaurant = useSelector((state) =>
    state.restaurant.restaurants.find((r) => r.id === parseInt(id))
  );

  if (!restaurant) return <p className="p-4">Restaurant not found.</p>;

  return (
    <div className="p-6">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-96 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p className="text-lg text-gray-700">{restaurant.description}</p>
      <p className="text-sm text-gray-600 mt-2">
        Cuisine: {restaurant.cuisine}
      </p>
      <p className="text-sm text-gray-600">Rating: {restaurant.rating}/5</p>
    </div>
  );
}
