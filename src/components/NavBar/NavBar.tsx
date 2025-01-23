import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {

    const StyledTooBar = styled(Toolbar)(({theme}) => ({
        display: "flex",
        justifyContent: "space-evenly",
      }));
  
    return (
        <>
            <AppBar position="absolute">
                <StyledTooBar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skill</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledTooBar>
            </AppBar>
        </>
        
    );
  }
  
  export default NavBar;