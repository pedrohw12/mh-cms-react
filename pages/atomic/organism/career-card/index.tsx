import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  period: string;
  location: string;
  salary: string;
  responsibilities: string;
  requirements: string;
  niceToHave: string;
  handleEdit: () => void;
  handleDelete: () => void;
};

export default function CareerCard({ title, handleEdit, handleDelete }: Props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 1,
        border: "3px solid #4fc3f7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={handleEdit}
          sx={{ "&:hover": { backgroundColor: "#c3f285" }, fontWeight: "bold" }}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={handleDelete}
          sx={{
            "&:hover": { backgroundColor: "#f28585", color: "#fff" },
            fontWeight: "bold",
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
