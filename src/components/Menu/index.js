import { Grid, Typography, Divider, Button } from "@mui/material"

function Menu({color,typeClicked,setTypeClicked,handleTypeClick}){

    return (
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={4}
          sx={{
            backgroundColor: color,
            borderRightStyle: "solid",
            borderRightWidth: "8px",
            borderRightColor: "teal",
          }}
        >
          <Typography style={{marginBottom:'20px',marginTop:'10px', color:'white'}}>Menu</Typography>
          <Divider/>
          <Grid container spacing={5}>
          <Grid item xl={12} lg={12} md={12} sm={12}>
            <Button onClick={()=>{
              handleTypeClick("all");
            }} style={{color:typeClicked==="all"?'red':''}}>All</Button>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12}>
            <Button onClick={()=>{
              handleTypeClick("note1");
            }} style={{color:typeClicked==="note1"?'red':''}}>Note1</Button>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12}>
            <Button onClick={()=>{
              handleTypeClick("note2");
            }} style={{color:typeClicked==="note2"?'red':''}}>Note2</Button>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12}>
            <Button onClick={()=>{
              handleTypeClick("note3");
            }} style={{color:typeClicked==="note3"?'red':''}}>Note3</Button>
            </Grid>
          </Grid>
        </Grid>
      
    )
}

export default Menu