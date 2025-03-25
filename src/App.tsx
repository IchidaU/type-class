import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { GetAllTodos } from "./lib/todo";
import { Todo } from "./domain/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const getAllTodos = async () => {
      const todosData = await GetAllTodos();
      setTodos(todosData);
    };

    getAllTodos();
  }, []);

  return (
    <>
      <h1 data-testid="title">Todo List</h1>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Done</Th>
              <Th isNumeric>CreatedAt</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map((todo) => (
              <Tr key={todo.id}>
                <Td>{todo.title}</Td>
                <Td>{todo.done ? "TRUE" : "FALSE"}</Td>
                <Td>{todo.created_at}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
