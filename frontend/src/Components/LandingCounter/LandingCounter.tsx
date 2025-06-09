import React, { useEffect, useState } from "react";

type LandingCounterProps = {
  count: number;
};
export default function LandingCounter({ count }: LandingCounterProps) {
  const [courseCounter, setCourseCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCourseCounter((prevCount) => prevCount + 1);
    }, 0.3);

    if (courseCounter >= count) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [courseCounter]);

  return (
    <span className="py-3 text-sm sm:text-xl lg:text-2xl font-bold">
      {courseCounter}
    </span>
  );
}
