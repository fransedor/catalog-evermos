import { useEffect, useRef } from "react";

const useInView = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit
) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;
		const observedElement = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    }, options);

    observer.observe(observedElement);

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [callback, options]);

  return elementRef;
};

export default useInView;
