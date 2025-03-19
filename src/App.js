import Family from "./useContext/Family";
import FamilyContext from "./useContext/FamilyContext";

const App = () => {
  const familyMessage = {
    familyName: "Invincibles",
  };

  return (
    <>
      <FamilyContext.Provider value={familyMessage}>
        <Family />
      </FamilyContext.Provider>
    </>
  );
};

export default App;
