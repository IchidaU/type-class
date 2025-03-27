import { render, screen, waitFor } from "@testing-library/react";

import App from "../App";
import { GetAllTodos } from "../lib/todo";
import { Todo } from "../domain/todo";

const mockGetAllTodos = jest
  .fn()
  .mockResolvedValue([
    new Todo("1", "title1", false, "2023-01-01"),
    new Todo("2", "title2", false, "2023-01-01"),
    new Todo("3", "title3", false, "2023-01-01"),
    new Todo("4", "title4", false, "2023-01-01"),
  ]);

jest.mock("../lib/todo", () => {
  return {
    GetAllTodos: () => mockGetAllTodos(),
  };
});

describe("App", () => {
  it("タイトルがあること", async () => {
    render(<App />);
    await waitFor(() => screen.getByTestId("table"));
    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });

  it("TODOが4件表示されること", async () => {
    render(<App />);
    await waitFor(() => screen.getByTestId("table"));
    const todos = screen.getByTestId("table").querySelectorAll("tr");

    expect(todos.length - 1).toBe(4);
  });
});
