import { img } from "../constants"; // Ensure this has `src` and `alt` for each logo

const HallOfFame = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {img.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-70 h-70 object-contain  "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
