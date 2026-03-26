import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ images, alt, className = "" }: { images: string[]; alt: string; className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        referrerPolicy="no-referrer"
        draggable={false}
      />
    );
  }

  const nextSlide = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className={`relative w-full h-full group overflow-hidden bg-zinc-100 ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-md"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-md"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-4" : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
