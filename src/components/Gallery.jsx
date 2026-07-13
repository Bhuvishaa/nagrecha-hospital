const images = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600",
];

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Hospital Gallery
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Take a glimpse of our modern healthcare facilities.
        </p>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={image}
                alt="Hospital"
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;