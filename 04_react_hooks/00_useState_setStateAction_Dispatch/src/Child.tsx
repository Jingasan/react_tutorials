import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
  setAnimalName: Dispatch<SetStateAction<string>>;
};

export const Child = ({ setAnimalName }: Props) => {
  useEffect(() => {
    const newAnimalName = `pig`;
    setAnimalName((name: string) => name + newAnimalName);
  }, [setAnimalName]);

  return <div>子コンポーネント</div>;
};

export default Child;
