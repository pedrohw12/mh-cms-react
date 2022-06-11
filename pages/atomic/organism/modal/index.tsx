import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  display: "flex",
  justifyContent: "center",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  children: React.ReactNode;
  modalTitle: string;
  handleClose: () => void;
  handleOpen: () => void;
  isModalOpen: boolean;
};

export default function BasicModal({
  modalTitle,
  children,
  handleClose,
  handleOpen,
  isModalOpen,
}: Props) {
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#1fc6ec",
          '&:hover': {
            backgroundColor: '#12a8c9'
          }
        }}
      >
        {modalTitle}
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
