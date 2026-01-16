import { motion } from "framer-motion";
import { Star, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Aarav S.",
    location: "Mumbai",
    rating: 5,
    text: "Diu is the mini-Goa without the crowd. The Naida Caves are a photographer's dream!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    name: "Priya M.",
    location: "Delhi",
    rating: 5,
    text: "The sunset at Nagoa Beach was the most peaceful experience. A hidden gem of India!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    name: "Rahul K.",
    location: "Bangalore",
    rating: 5,
    text: "St. Paul's Church took my breath away. The Portuguese heritage is beautifully preserved.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  }
];

const ReviewsSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-body text-sm uppercase tracking-[0.3em] text-primary">
            Traveler Stories
          </span>
          <h2 className="mb-6 font-display text-4xl font-medium text-foreground md:text-5xl">
            Voices from the Island
          </h2>
          <div className="mx-auto h-px w-24 bg-primary" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg bg-card p-8 shadow-soft"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 font-body text-lg italic leading-relaxed text-foreground">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display font-medium text-foreground">{review.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary font-body text-primary-foreground shadow-gold transition-all hover:bg-primary/90"
          >
            <Upload className="mr-2 h-5 w-5" />
            Share Your Memory
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;