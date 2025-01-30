import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {

    const StyledTooBar = styled(Toolbar)(({theme}) => ({
        display: "flex",
        justifyContent: "space-evenly",
      }));

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até a section
        }
    };
  
    return (
        <>
            <AppBar position="absolute">
                <StyledTooBar>
                    <MenuItem onClick={() => scrollToSection("about")}>About</MenuItem>
                    <MenuItem onClick={() => scrollToSection("about")}>Skill</MenuItem>
                    <MenuItem onClick={() => scrollToSection("project")}>Projects</MenuItem>
                </StyledTooBar>
            </AppBar>
        </>
        
    );
  }
  
  export default NavBar;