import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function BasicButton({ children, onClick }: Props) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClick} variant="contained">
        {children}
      </Button>
    </Stack>
  );
}
