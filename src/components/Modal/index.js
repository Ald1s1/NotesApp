import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Grid, Select, MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
export default function CustomModal({
  open,
  setOpen,
  title,
  setTitle,
  description,
  setDescription,
  onSave,
  onCancel,
  type,
  setType,
}) {
  return (
    <Modal
      disableEnforceFocus
      disableAutoFocus
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      open={open}
    >
      <Box
        sx={{
          position: "relative",
          width: 500,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: (theme) => theme.shadows[5],
          top: "10%",
          left: "30%",
          height: "300px",
          p: 10,
        }}
      >
        <Grid container spacing={5}>
          <Grid items xl={12} lg={12}>
            <TextField
              value={title}
              sx={{ width: "108%" }}
              label="Title"
              color="secondary"
              focused
              onChange={(e) => {
                console.log(e);
                setTitle(e.target.value);
              }}
            />
          </Grid>
          <Grid items xl={12} lg={12}>
            <TextField
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              multiline
              maxRows={4}
              minRows={2}
              sx={{ width: "108%", marginTop: "30px" }}
              label="Description"
              color="secondary"
              focused
            />
          </Grid>
          <Grid item xl={12} lg={12}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              onChange={(i) => {
                console.log(i)
                setType(i.target.value);
              }}
              label="type"
            >
              <MenuItem value={"note1"}>Note1</MenuItem>
              <MenuItem value={"note2"}>Note2</MenuItem>
              <MenuItem value={"note3"}>Note3</MenuItem>
            </Select>
          </Grid>
          <Grid item xl={6} lg={6}>
            <Button
              onClick={() => {
                onSave();
              }}
            >
              Save
            </Button>
          </Grid>
          <Grid item xl={6} lg={6}>
            <Button
              onClick={() => {
                onCancel();
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
