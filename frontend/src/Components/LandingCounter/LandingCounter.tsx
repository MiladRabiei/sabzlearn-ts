import React, { useEffect, useState } from "react";

type LandingCounterProps={
  count:number
}
export default function LandingCounter({ count }:LandingCounterProps) {
  const [courseCounter, setCourseCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCourseCounter((prevCount) => prevCount + 1);
    }, 1);

    if (courseCounter === count) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [courseCounter]);

  return <span className="landing-status__count">{courseCounter}</span>;
}
