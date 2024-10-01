import chipStyle from "../modules/Chip.module.css";

interface IChip {
  title: string;
  selected?: boolean;
  handleClick?: ()=>void;
}

const Chip = ({ title, selected = false, handleClick }: IChip) => (
  <div className={selected ? chipStyle.chipSelected : chipStyle.chip} onClick={handleClick}>
    {title}
  </div>
);

export default Chip;
