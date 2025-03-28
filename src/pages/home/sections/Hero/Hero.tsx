import { Box, Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import Grid from "@mui/material/Grid";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from '../../../../components/AnimatedBackground/AnimatedBackground';
import theme from "../../../../theme";

import Curriculo from "../../../../assets/pdf/Curriculo - Guilherme Guimarães - 2025.pdf";

function Hero() {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative", 
    overflow: "hidden", 
    zIndex: 2,
    [theme.breakpoints.up("md")]: {
      
    },
    [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: "100px",
      height: "110vh",
    },
    [theme.breakpoints.up('md')]: { // >=mobile
      paddingTop: "0",
    }
  }));

  const StyledImg = styled("img")(() => ({
    width: "75%",
    borderRadius: "50%",
    border: "1px solid white",
    position: "relative", 
    zIndex: 1, 
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      marginTop: "60%",
      alignItems: "center", 
      marginLeft: "4%"
    },
  }));

  return (
    <section id="hero">
      <StyledHero>
        <Container maxWidth="lg">
          <Box position="absolute" top={0} left={0} width="100%" height="{50%}" zIndex={-1}>
            <AnimatedBackground />
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} alt="avatar" />
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography color="secondary" variant="h1" textAlign="center" marginBottom="10px">Guilherme Bomfim</Typography>
              <Typography color="secondary" variant="h2" textAlign="center" marginBottom="20px">I'm a FullStack Developer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={2}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => window.open(Curriculo, '_blank')}>
                    <FileDownloadIcon/>
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => window.location.href = 'mailto:guilherme.bomfim98@hotmail.com'}>
                    <EmailIcon/>
                    <Typography>Contact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        
        </Container>
      </StyledHero>
    </section>
  );
}

export default Hero;
