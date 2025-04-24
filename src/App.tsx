import Form from "./components/Form.tsx";
import Cards from "./components/Cards.tsx";

const App = () => {
  return (
    <main className="flex gap-8 max-lg:flex-col p-8 items-center justify-center">
      <Form />
      <Cards />
    </main>
  );
};

export default App;
