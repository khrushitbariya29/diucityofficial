import { motion } from "framer-motion";

const timelineData = [
  {
    era: "Ancient Era",
    period: "Before 1500 CE",
    description: "Referred to as Jalandhar Kshetra in the Puranas. Ruled by the Mauryas, Kshatrapas, and Maitrakas, the island served as a vital maritime hub on ancient trade routes."
  },
  {
    era: "The Portuguese Era",
    period: "1535 - 1961",
    description: "Sultan Bahadur Shah of Gujarat ceded the island to the Portuguese. For 450 years, it was a 'Little Portugal,' serving as a vital trade link between India and the Middle East, leaving behind stunning colonial architecture."
  },
  {
    era: "Liberation",
    period: "December 19, 1961",
    description: "Through Operation Vijay, Diu was liberated from colonial rule and integrated into the Indian Union, marking the end of European colonialism in the subcontinent."
  }
];

const HistorySection = () => {
  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block font-body text-sm uppercase tracking-[0.3em] text-primary">
            Through the Ages
          </span>
          <h2 className="mb-6 font-display text-4xl font-medium text-secondary-foreground md:text-5xl lg:text-6xl">
            The Island of Seven Names
          </h2>
          <p className="mx-auto max-w-3xl font-display text-xl italic text-secondary-foreground/80">
            From ancient Jalandhar Kshetra to the Portuguese Diu, 
            this island has witnessed empires rise and fall
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-primary/30 md:left-1/2 md:block md:-translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.era}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 hidden h-4 w-4 rounded-full border-4 border-primary bg-secondary md:block ${
                  index % 2 === 0 ? "-right-2 md:right-[-9px]" : "-left-2 md:left-[-9px]"
                }`}
              />

              {/* Card */}
              <div className="rounded-lg bg-colonial p-8 shadow-soft">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 font-body text-xs uppercase tracking-wider text-primary">
                  {item.period}
                </span>
                <h3 className="mb-4 font-display text-2xl font-medium text-foreground md:text-3xl">
                  {item.era}
                </h3>
                <p className="font-body leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;