import { motion } from "framer-motion";
import PillarCard from "./PillarCard";

const pillarsData = [
  {
    name: "Diu Fort",
    shortIntro: "An invincible sentinel by the sea.",
    historyPreview: "Built in 1535 as a strategic alliance between the Sultan of Gujarat and the Portuguese.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80"
  },
  {
    name: "Naida Caves",
    shortIntro: "A sun-drenched labyrinth of rock.",
    historyPreview: "Formed by Portuguese stone quarrying; these caves later served as hideouts during the 'Operation Vijay' liberation.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80"
  },
  {
    name: "Nagoa Beach",
    shortIntro: "The iconic horseshoe-shaped paradise.",
    historyPreview: "Named after its unique shape; home to the rare Hoka trees brought from Africa by the Portuguese.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80"
  },
  {
    name: "St. Paul's Church",
    shortIntro: "A masterpiece of Baroque architecture.",
    historyPreview: "Completed in 1610; dedicated to the Apostle of the Gentiles and famous for its intricate wood carvings.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&q=80"
  },
  {
    name: "INS Khukri",
    shortIntro: "A tribute to the heroes of the deep.",
    historyPreview: "A memorial dedicated to the brave sailors of the INS Khukri, which sank during the 1971 Indo-Pak war.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800&q=80"
  },
  {
    name: "Gangeshwar",
    shortIntro: "Where the ocean performs 'Abhishek'.",
    historyPreview: "Ancient sea-side Shiva lingas said to have been established by the Pandavas during their exile.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&q=80"
  },
  {
    name: "Ghoghla Beach",
    shortIntro: "A 'Blue Flag' certified pristine shore.",
    historyPreview: "Known as the gateway to Diu; it remains one of the cleanest and largest beaches on the western coast.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
  },
  {
    name: "Panikota",
    shortIntro: "The floating fortress in the creek.",
    historyPreview: "Originally the 'Fortim-do-Mar', it served as a nautical prison and a defense post in the middle of the sea.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80"
  }
];

const PillarsGallery = () => {
  return (
    <section className="bg-muted py-24">
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
            Explore the Island
          </span>
          <h2 className="mb-6 font-display text-4xl font-medium text-foreground md:text-5xl">
            The 8 Pillars of Diu
          </h2>
          <p className="mx-auto max-w-2xl font-body text-muted-foreground">
            Each destination is a gateway to history, nature, and the soul of this enchanting island
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-primary" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillarsData.map((pillar, index) => (
            <PillarCard
              key={pillar.name}
              index={index}
              {...pillar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsGallery;