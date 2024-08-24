import Modal from "@mui/material/Modal";
import React from "react";

export default function BasicModal({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          onClick={() => setOpen(false)}
          className="h-full w-full flex items-center justify-center"
        >
          {children}
        </div>
      </Modal>
    </div>
  );
}
