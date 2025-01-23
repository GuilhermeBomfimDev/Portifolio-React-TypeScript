import { Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import Grid from "@mui/material/Grid";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

function Hero() {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center"
  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "50%",
    border: "1px solid white"
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <StyledImg src={Avatar} alt="avatar" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="secondary" variant="h1" textAlign="center" marginBottom="10px">Guilherme Bomfim</Typography>
            <Typography color="secondary" variant="h2" textAlign="center" marginBottom="20px">I'm a FullStack Developer</Typography>
            <Grid container display="flex" justifyContent="center" spacing={2}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <FileDownloadIcon/>
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                 <EmailIcon/>
                  <Typography>Contact Me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      
      </Container>
    </StyledHero>
  );
}

export default Hero;
