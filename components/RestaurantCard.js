import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-md transition">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{restaurant.name}</h2>
      <p>{restaurant.cuisine}</p>
      <p className="text-sm text-gray-500">Rating: {restaurant.rating}/5</p>
      <Link
        to={`/restaurant/${restaurant.id}`}
        className="text-red-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
