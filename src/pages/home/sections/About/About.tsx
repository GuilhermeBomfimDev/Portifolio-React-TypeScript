import { Grid, Grid2, styled, Typography } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import SimpleSlide from "../../../../components/SlideItens/SlideItens";
import { Translate } from "@mui/icons-material";


function About() {
    const StyledAbout = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }));
  
    return (
        <StyledAbout>
            <Grid2 container spacing={2}>
                <Typography fontSize={'5rem'} fontWeight={200}>About</Typography>
            </Grid2>
            <Grid2 container spacing={4}>
                <Grid item xs={12} md={6} padding={2} border={"1px solid grey"} display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
                    <WorkspacePremiumIcon/>
                    <Typography fontWeight={"bold"}>Experience</Typography>
                    <Typography >2+ years</Typography>
                    <Typography >Backend Development</Typography>
                    <Typography >Fullstack Development</Typography>
                </Grid>
                <Grid item xs={12} md={6} padding={2} border={"1px solid grey"} display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
                    <SchoolIcon/>
                    <Typography fontWeight={"bold"}>Education</Typography>
                    <Typography >Graduação</Typography>
                    <Typography >Análise de Sistemas - Senac</Typography>
                    <Typography >Professional C# - Udemy</Typography>
                </Grid>
            </Grid2>
            <Grid2 container spacing={1}>
                <Grid item xs={12} md={6} padding={2} marginLeft={"150px"} marginRight={"150px"} marginTop={"20px"} textAlign="center">
                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
                </Grid>
            </Grid2>
        </StyledAbout>
    );
  }
  
  export default About;