import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  paddingBottom: 100,
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
    <div
      style={{
        overflow: "scroll",
        position: "absolute",
        bottom: 50,
        right: 50,
      }}
    >
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "#1fc6ec",
          "&:hover": {
            backgroundColor: "#12a8c9",
          },
        }}
      >
        <AddIcon />
      </Button>
      <Modal
        sx={{ overflow: "scroll" }}
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
