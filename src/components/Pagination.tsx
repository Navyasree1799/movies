import paginationStyles from "../modules/Pagination.module.css";
import { scrollToTop } from "../utils/scrollToTop";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = (props: IPaginationProps) => {
  const { currentPage, totalPages, setCurrentPage } = props;

  function handleClickPrev() {
    setCurrentPage(currentPage - 1);
    scrollToTop();
  }

  function handleClickNext() {
    setCurrentPage(currentPage + 1);
    scrollToTop();
  }
  return (
    <div className={paginationStyles.pagination}>
      <button onClick={handleClickPrev} disabled={currentPage === 1}>
        &laquo;
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={handleClickNext} disabled={currentPage === totalPages}>
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
