import { Card, Grid, Typography, Button } from "@mui/material";

function Note({ title, description, onDelete, index , onOpen}) {
  return (
    <Card>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <Typography>{description}</Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6}>
          <Button
            onClick={() => {
              onDelete(index);
            }}
          >
            X
          </Button>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6}>
          <Button onClick={()=> {
            onOpen(index)
          }}>
         
          Edit</Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Note;
