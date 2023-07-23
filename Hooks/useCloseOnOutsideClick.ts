import { useEffect, useRef, useState } from "react";

export const useCloseOnOutsideClick = (initialValue: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(initialValue);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current?.contains(event.target as Node) &&
      !ref1.current?.contains(event.target as Node)
    )
      setVisible(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { visible, setVisible, ref, ref1 };
};
