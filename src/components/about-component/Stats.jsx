import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    { label: "Team members", value: 390 },
    { label: "Years of experience", value: 12 },
    { label: "New raised funds", value: 12, prefix: "$", suffix: "m" },
    { label: "Lovely customers", value: 20000, suffix: "k+" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const AnimatedNumber = ({ value, prefix, suffix }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <span ref={ref} className="text-[#141415]">
        {inView ? (
          <CountUp
            start={0}
            end={value}
            duration={2}
            prefix={prefix}
            suffix={suffix}
            separator=","
          />
        ) : (
          <>
            {prefix || ""}
            0
            {suffix || ""}
          </>
        )}
      </span>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center plus-jakarta-sans z-50 ">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="text-5xl font-bold ">
            <AnimatedNumber
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </div>
          <div className="text-xl mt-2 text-[#146ef5] font-bold">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
