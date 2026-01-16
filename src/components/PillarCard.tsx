import { motion } from "framer-motion";

interface PillarCardProps {
  index: number;
  name: string;
  shortIntro: string;
  historyPreview: string;
  image: string;
}

const PillarCard = ({ index, name, shortIntro, historyPreview, image }: PillarCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-card shadow-soft transition-all duration-500 hover:shadow-elevated"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden md:h-80">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Number badge */}
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
        <h3 className="mb-2 font-display text-2xl font-medium transition-colors group-hover:text-primary">
          {name}
        </h3>
        <p className="mb-3 font-display text-sm italic text-primary-foreground/80">
          {shortIntro}
        </p>
        
        {/* Hidden history that reveals on hover */}
        <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">
          <div className="h-px w-12 bg-primary/50 mb-3" />
          <p className="font-body text-sm leading-relaxed text-primary-foreground/70">
            {historyPreview}
          </p>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
};

export default PillarCard;