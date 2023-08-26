import { RefObject, useEffect, useRef, useState } from "react";
interface Config {
  onTouchStart?: (e: TouchEvent) => void
  onTouchMove?: (e: TouchEvent) => void
  onTouchEnd?: (e: TouchEvent) => void
}

export const useSwipe = (elementRef: RefObject<HTMLElement>, config?: Config) => {
  const [direction, setDirection] = useState('');
  //记录手指移动距离
  const x = useRef(-1);
  const onTouchMove = (e: TouchEvent) => {
    config?.onTouchMove?.(e)
    const dx = e.touches[0].clientX - x.current;
    if (Math.abs(dx) < 5) {
      setDirection('')
    } else if (dx > 0) {
      setDirection('right')
    } else {
      setDirection('left')
    }
  };
  const onTouchStart = (e: TouchEvent) => {
    config?.onTouchStart?.(e)
    x.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    config?.onTouchEnd?.(e)
    setDirection('');
  };
  useEffect(() => {
    if (!elementRef.current) {
      return
    }
    elementRef.current.addEventListener('touchstart', onTouchStart)
    elementRef.current.addEventListener('touchmove', onTouchMove)
    elementRef.current.addEventListener('touchend', onTouchEnd)
    return () => {
      if (!elementRef.current) {
        return
      }
      elementRef.current.removeEventListener('touchstart', onTouchStart)
      elementRef.current.removeEventListener('touchmove', onTouchMove)
      elementRef.current.removeEventListener('touchend', onTouchEnd)
    }

  }, []);
  return { direction }
};