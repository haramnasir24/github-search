import { useEffect, useRef } from "react";

function useInfiniteScroll(callback: () => void) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 1 }
    );

    // * observer ref observes the last element ref

    if (lastElementRef.current){
        observerRef.current.observe(lastElementRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [callback]);

  return lastElementRef;
}

export default useInfiniteScroll;
