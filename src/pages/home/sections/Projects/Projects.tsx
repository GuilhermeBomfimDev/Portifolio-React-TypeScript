import { Container, styled } from "@mui/material";



function Projects() {
    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
    }));
  
    return (
      <StyledProjects>
        <Container maxWidth="lg">
            <h1>Projects</h1>
        </Container>
      </StyledProjects>
    );
  }
  
export default Projects;