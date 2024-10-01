import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";
import "@testing-library/jest-dom";

window.scrollTo = vi.fn() as any;

afterAll(() => {
  vi.clearAllMocks();
});

describe("Pagination Component", () => {
  test("renders pagination component with correct page information", () => {
    const totalPages = 5;
    const currentPage = 3;
    const setCurrentPageMock = vi.fn();

    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPageMock}
      />
    );

    const pageInfo = screen.getByText(`Page ${currentPage} of ${totalPages}`);
    expect(pageInfo).toBeInTheDocument();

    const prevButton = screen.getByText("«");
    expect(prevButton).toBeInTheDocument();
    expect(prevButton).not.toBeDisabled();

    const nextButton = screen.getByText("»");
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).not.toBeDisabled();
  });

  test("handles click on previous button correctly", () => {
    const totalPages = 5;
    const currentPage = 3;
    const setCurrentPageMock = vi.fn();

    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPageMock}
      />
    );

    const prevButton = screen.getByText("«");
    fireEvent.click(prevButton);

    expect(setCurrentPageMock).toHaveBeenCalledWith(currentPage - 1);
  });

  test("handles click on next button correctly", () => {
    const totalPages = 5;
    const currentPage = 3;
    const setCurrentPageMock = vi.fn();

    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPageMock}
      />
    );

    const nextButton = screen.getByText("»");
    fireEvent.click(nextButton);

    expect(setCurrentPageMock).toHaveBeenCalledWith(currentPage + 1);
  });

  test("disables previous button on first page", () => {
    const totalPages = 5;
    const currentPage = 1;
    const setCurrentPageMock = vi.fn();

    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPageMock}
      />
    );

    const prevButton = screen.getByText("«");
    expect(prevButton).toBeDisabled();
  });

  test("disables next button on last page", () => {
    const totalPages = 5;
    const currentPage = 5;
    const setCurrentPageMock = vi.fn();

    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPageMock}
      />
    );

    const nextButton = screen.getByText("»");
    expect(nextButton).toBeDisabled();
  });
});
