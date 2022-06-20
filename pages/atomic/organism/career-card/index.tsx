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
  responsibilities: [];
  requirements: [];
  niceToHave: [];
  handleEdit: () => void;
  handleDelete: () => void;
};

export default function CareerCard({
  title,
  period,
  location,
  salary,
  responsibilities,
  requirements,
  niceToHave,
  handleEdit,
  handleDelete,
}: Props) {
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
        <Typography variant="body2" color="text.secondary">
          <b>Period:</b>
          {period}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Location:</b>
          {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Salary:</b>
          {salary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Responsibilities:</b>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Requiriments:</b>
          <ul>
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Nice to have:</b>
          <ul>
            {niceToHave.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleEdit}>
          Edit
        </Button>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
