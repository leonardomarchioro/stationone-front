import { VscCircleFilled } from "react-icons/vsc";

const HeaderTitle = ({ text }) => {
  return (
    <header>
      {[1, 2, 3].map((_, i) => (
        <VscCircleFilled key={i} color={"#F4A15D"} />
      ))}
      <h1>{text}</h1>
      {[1, 2, 3].map((_, i) => (
        <VscCircleFilled key={i} color={"#F4A15D"} />
      ))}
    </header>
  );
};

export default HeaderTitle;
