import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import App from "../../App";
import Menu from "../../components/Menu";
import Note from "../../components/Note";

function Notes({notesData, onDelete, onOpen}) {

  const [typeClicked, setTypeClicked]= useState("all") 

  function handleTypeClick(item){
    console.log(item)
    setTypeClicked(item)


  } 

 
  return (
    <>
      <Grid container sx={{ height: "650px" }} spacing={0}>
        <Menu color={"darkcyan"} handleTypeClick={handleTypeClick} typeClicked={typeClicked} setTypeClicked={setTypeClicked}/>
        <Grid item xl={10} lg={10} md={10} sm={8}>
          <Typography>Your notes</Typography>
          <Grid container spacing={5}>
            {notesData.map((el, index) => {
              if(typeClicked!=='all'){
                if(el.type ===typeClicked){
                return (
                <Grid item xl={6} lg={6}>
                  <Note
                    key={el.id}
                    title={el.title}
                    description={el.description}
                    onDelete={onDelete}
                    index={index}
                    onOpen={onOpen}
                    
                  />
                </Grid>
              );
              }
            else{
              return ''
            }
              }
              else{
                return (
                <Grid item xl={6} lg={6}>
                  <Note
                    key={el.id}
                    title={el.title}
                    description={el.description}
                    onDelete={onDelete}
                    index={index}
                    onOpen={onOpen}
                    
                  />
                </Grid>
              );
              }

            
              
            })}
          </Grid>
        </Grid>
      </Grid>{" "}
    </>
  );
}

export default Notes;
