import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "./utils";

const TextEditor: React.FC = () => {
  return <QuillNoSSRWrapper style={{color: '#000'}} modules={modules} formats={formats} theme="snow" />;
};
export default TextEditor;
