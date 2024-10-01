import tagStyles from "../modules/Tag.module.css"
 
interface ITag {
  title: string;
}

const Tag = ({ title }: ITag) => {
  return <div className={tagStyles.tag}>{title}</div>;
};

export default Tag
