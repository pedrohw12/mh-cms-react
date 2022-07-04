import { INLINE_STYLES } from "../text-editor/constants";

const InlineStyleControls = (props: any) => {
  // const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <button key={type.label} disabled onClick={() => null}>
          test
        </button>
      ))}
    </div>
  );
};

export default InlineStyleControls;
