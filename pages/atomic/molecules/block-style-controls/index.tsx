import StyledButton from "../style-button";
import { BLOCK_TYPES } from "../text-editor/constants";

const BlockStyleControls = ({ editorState, onToggle }: any) => {
  const selection = editorState.getSelection();
  const blockType = editorState // returns 'unstyled'
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyledButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default BlockStyleControls;
