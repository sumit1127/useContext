import FamilyContext from "./FamilyContext";
import { useContext } from "react";

const GrandSon = () => {
  const message = useContext(FamilyContext);
  return (
    <div>
      <h4>GrandSon {message.familyName}</h4>
    </div>
  );
};

export default GrandSon;
