import GrandSon from "./GrandSon";
import GrandDaughter from "./GrandDaughter";
import FamilyContext from "./FamilyContext";
import { useContext } from "react";

const Child = () => {
  const message = useContext(FamilyContext);
  return (
    <div>
      <h2>Child {message.familyName}</h2>
      <GrandSon />
      <GrandDaughter />
    </div>
  );
};

export default Child;
