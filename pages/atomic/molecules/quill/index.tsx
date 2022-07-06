import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "./utils";

type Props = {
  onChange: (e: any) => void;
  value: any;
};

const TextEditor: React.FC<Props> = ({ onChange, value }: Props) => {
  return (
    <QuillNoSSRWrapper
      value={value}
      onChange={onChange}
      style={{ color: "#000", height: 400, width: 800 }}
      modules={modules}
      formats={formats}
      theme="snow"
    />
  );
};
export default TextEditor;
