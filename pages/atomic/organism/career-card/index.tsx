import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  period: string;
  location: string;
  salary: string;
  responsibilities: string;
  requiriments: string;
  niceToHave: string;
  handleEdit: () => void;
  handleDelete: () => void;
};

export default function CareerCard({
  title,
  period,
  location,
  salary,
  responsibilities,
  requiriments,
  niceToHave,
  handleEdit,
  handleDelete,
}: Props) {
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {period}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {salary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {responsibilities}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {requiriments}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {niceToHave}
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
