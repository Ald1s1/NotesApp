import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
function FloatingButton({ setOpen}){

    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
      };
    return(<Fab sx={fabStyle} color="primary" aria-label="add" onClick={()=>{
        setOpen(true)
    }}> 
    <AddIcon />
  </Fab>)
}

export default FloatingButton


