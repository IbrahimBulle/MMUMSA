import { useEffect, useState } from "react";

export const Gallery = ({ images = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Get unique categories, ignoring missing category values
  const categories = [
    "All",
    ...new Set(images.map((image) => image.category).filter(Boolean)),
  ];

  // Filter images by category
  const filteredImages =
    selectedCategory === "All" ? images : (
      images.filter((image) => image.category === selectedCategory)
    );

  const isLightboxOpen =
    lightboxIndex !== null &&
    lightboxIndex >= 0 &&
    lightboxIndex < filteredImages.length;

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    setLightboxIndex((current) => {
      if (current === null || filteredImages.length === 0) return null;
      return (current - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  const goToNext = () => {
    setLightboxIndex((current) => {
      if (current === null || filteredImages.length === 0) return null;
      return (current + 1) % filteredImages.length;
    });
  };

  // Prevent background scrolling while the lightbox is open
  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, filteredImages.length]);

  const activeImage = isLightboxOpen ? filteredImages[lightboxIndex] : null;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Gallery heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <span className="mb-3 inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
          Memories & Moments
        </span>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Our Gallery
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
          Explore the moments, events, and experiences that bring our community
          together.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-emerald-600" />
      </div>

      {/* Category filters */}
      {images.length > 0 && (
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setSelectedCategory(category);
                  closeLightbox();
                }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 sm:px-5
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2
                  ${
                    isActive ?
                      "border-emerald-700 bg-emerald-700 text-white shadow-md shadow-emerald-900/10"
                    : "border-gray-200 bg-white text-gray-600 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-800"
                  }`}>
                {category}
              </button>
            );
          })}
        </div>
      )}

      {/* Responsive image grid */}
      {filteredImages.length > 0 ?
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image, index) => (
            <button
              key={image.id ?? image.src ?? index}
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`View ${image.title || `image ${index + 1}`}`}
              className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-gray-100 text-left shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4">
              <img
                src={image.src}
                alt={image.title || `Gallery image ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* View indicator */}
              <div className="absolute right-3 top-3 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true">
                  <circle cx="10.8" cy="10.8" r="6.8" />
                  <path d="m16 16 4.5 4.5M10.8 8v5.6M8 10.8h5.6" />
                </svg>
              </div>

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                {image.category && (
                  <span className="mb-2 inline-block rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {image.category}
                  </span>
                )}

                {image.title && (
                  <h3 className="line-clamp-2 text-base font-semibold text-white sm:text-lg">
                    {image.title}
                  </h3>
                )}
              </div>
            </button>
          ))}
        </div>
      : <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-16 text-center sm:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-7 w-7"
              aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="8.5" cy="9" r="1.5" />
              <path d="m21 15-5-5L5 20" />
            </svg>
          </div>

          <h3 className="mt-5 text-lg font-semibold text-gray-900">
            {images.length === 0 ?
              "Our memories are coming soon"
            : "No photos in this category"}
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
            {images.length === 0 ?
              "Check back soon to explore photos from our events and activities."
            : "Try selecting another category to discover more moments."}
          </p>
        </div>
      }

      {/* Lightbox */}
      {isLightboxOpen && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={closeLightbox}>
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6">
            &times;
          </button>

          {/* Previous image */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:h-12 sm:w-12">
              &lsaquo;
            </button>
          )}

          {/* Selected image */}
          <div
            className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}>
            <img
              src={activeImage.src}
              alt={activeImage.title || "Selected gallery image"}
              className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            {activeImage.title && (
              <h3 className="mt-4 text-center text-base font-semibold text-white sm:text-lg">
                {activeImage.title}
              </h3>
            )}

            {activeImage.category && (
              <p className="mt-1 text-sm text-gray-400">
                {activeImage.category}
              </p>
            )}

            <p className="mt-2 text-sm tabular-nums text-gray-400">
              {lightboxIndex + 1} of {filteredImages.length}
            </p>
          </div>

          {/* Next image */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
              aria-label="Next image"
              className="absolute right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:h-12 sm:w-12">
              &rsaquo;
            </button>
          )}
        </div>
      )}
    </section>
  );
};
