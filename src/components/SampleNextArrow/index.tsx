import { SlickArrow } from "../../styles";

export default function SampleNextArrow(props: { className: string, style: object, onClick: () => void }) {
  const { className, style, onClick } = props;
  return (
    <SlickArrow
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}