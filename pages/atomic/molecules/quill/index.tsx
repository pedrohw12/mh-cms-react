import dynamic from "next/dynamic";
import { createRef, useEffect, useRef } from "react";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "./utils";

type Props = {
  onChange: (e: any) => void;
};

const TextEditor: React.FC<Props> = ({ onChange }: Props) => {
  const ref = createRef();
  useEffect(() => {
    // @ts-ignore
    ref.current.value = "test";
  }, []);
  return (
    <div style={{ position: "relative", height: 400 }}>
      <div
        style={{
          width: "100%",
          height: 75,
          backgroundColor: "#fff",
          borderBottom: "1px solid #ddd",
          position: "absolute",
          zIndex: 5,
        }}
      />
      <QuillNoSSRWrapper
        // @ts-ignore
        ref={ref}
        onChange={onChange}
        style={{ color: "#000", height: 400, width:800 }}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </div>
  );
};
export default TextEditor;
