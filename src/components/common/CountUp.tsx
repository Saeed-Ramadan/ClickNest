import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const CountUp = ({ to, duration = 2, prefix = '', suffix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export default CountUp;
