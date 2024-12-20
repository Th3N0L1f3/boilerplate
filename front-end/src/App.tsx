import Button from "./components/ui/Button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button text="Texte" forme="rectangle" />
      <Button text="Texte" forme="cercle" icon="plus"/>
      <Button text="Texte" forme="cercle" icon="moins"/>
      <Button text="Texte" forme="cercle" icon="flèche-gauche"/>
      <Button text="Texte" forme="cercle" icon="flèche-droite"/>
      {/* <Button text="Texte" isCircled={false} />
      <Button text="Texte" isCircled={true} isDirectioned="right" /> */}
    </>
  );
}

export default App;
