import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { GetAllTodos } from "./lib/todo";

function App() {
  useEffect(() => {
    const getAllTodos = async () => {
      const todosData = await GetAllTodos();
      console.log(todosData);
    };

    getAllTodos();
  }, []);

  return (
    <>
      <Button colorScheme="teal">button</Button>
    </>
  );
}

export default App;
