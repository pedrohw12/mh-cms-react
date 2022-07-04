import { useEffect, useState } from "react";

type Props = {
  active: boolean;
  label: string;
  onToggle: () => void;
};

const StyledButton: React.FC<Props> = ({ active, label, onToggle }: Props) => {
  const [className, setClassName] = useState("RichEditor-styleButton");

  useEffect(() => {
    if (active) {
      setClassName(`${className} RichEditor-activeButton`);
    }
  }, [active, className]);

  return (
    <span
      style={{
        border: "1px solid #000",
        padding: 10,
        backgroundColor: "#ddd",
        cursor: "pointer",
        marginBottom: 10,
      }}
      className={className}
      onMouseDown={onToggle}
    >
      {label}
    </span>
  );
};

export default StyledButton;
