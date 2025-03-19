import Child from "./Child";
import FamilyContext from "./FamilyContext";
import { useContext } from "react";

const Parent = () => {
  const message = useContext(FamilyContext);
  return (
    <div>
      <h1>Parent {message.familyName}</h1>
      <Child />
    </div>
  );
};

export default Parent;
