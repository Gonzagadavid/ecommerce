import { useEffect, useState } from "react";
import { Product } from "../types";

const useExibition = (array: Product[], step: number) => {
  const originalList = array;
  const [init, setInit] = useState(0);
  const [end, setEnd] = useState(step);
  const [list, setListSelected] = useState(originalList.slice(init, end));

  const inc = () => {
    if (end >= originalList.length) return undefined;
    setInit(init + step);
    setEnd(end + step);
  };

  const dec = () => {
    if (!init) return undefined;
    setInit(init - step);
    setEnd(end - step);
  };

  useEffect(() => {
    setListSelected(originalList.slice(init, end));
  }, [init, end, originalList]);

  return { list, inc, dec };
};

export default useExibition;
