import spinnerStyles from "../modules/Spinner.module.css"

const Spinner = () => (
  <div className={spinnerStyles.ring}>
    Loading
    <span></span>
  </div>
);

export default Spinner;
