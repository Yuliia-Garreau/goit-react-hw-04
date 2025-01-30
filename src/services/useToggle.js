import { useState } from "react";
export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = setIsOpen(true);
  const closed = setIsOpen(false);
  return { isOpen, open, closed };
};
