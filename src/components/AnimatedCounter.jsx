import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ title, count }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center p-10 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.h3
        className="text-4xl font-bold text-[#AB6604]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        hello{count}
      </motion.h3>
      <motion.p
        className="text-xl text-gray-700 mt-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedCounter;
