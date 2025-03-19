import FamilyContext from "./FamilyContext";
import { useContext } from "react";

const GrandDaughter = () => {
  const msg = useContext(FamilyContext);
  return (
    <div>
      <h4>Grand Daughter {msg.familyName}</h4>
    </div>
  );
};

export default GrandDaughter;
