import { Grid, Grid2, Paper, styled, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from '@mui/icons-material/Code';


function About() {
    const StyledAbout = styled("div")(() => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        ".about:hover .slide1": {
            transform: "translateX(0)",
        },
        ".about:hover .slide2": {
            transform: "translateX(0)",
        },
    }));
    
    const StyledSlide1 = styled("div")(({ theme }) => ({
        padding: "20px",
        border: "1px solid grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "85%",
        maxWidth: "400px", 
        transition: "transform 1.5s ease-in-out",
        [theme.breakpoints.up("md")]: {
            position: "relative",
            transform: "translateX(-300px)",
            transition: "transform 1.5s ease-in-out",
            width: "400px", 
            maxWidth: "none",
        }
    }));
    
    const StyledSlide2 = styled("div")(({ theme }) => ({
        padding: "20px",
        border: "1px solid grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "85%", 
        maxWidth: "400px", 
        transition: "transform 1.5s ease-in-out",
        [theme.breakpoints.up("md")]: {
            position: "relative",
            transform: "translateX(300px)",
            transition: "transform 1.5s ease-in-out",
            width: "400px",
            maxWidth: "none",
        }
    }));

    const StyledResume = styled("div")(({ theme }) => ({
        padding: 2,
        marginLeft: "250px",
        marginRight: "250px",
        marginTop: "20px",
        textAlign: "center",
        borderBottom: "3px solid grey",
        [theme.breakpoints.up("xs")]: {
            padding: "1rem",
            marginLeft: "12px",
            marginRight: "12px",
            fontSize: "10px",
        },
        [theme.breakpoints.up("md")]: {
            padding: 2,
            marginLeft: "200px",
            marginRight: "200px",
            marginTop: "20px",
        }
    }));

    const StyledSkillsContainer = styled("div")(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "100%",
        gap: "30px",
        flexWrap: "wrap",
        marginTop: "20px",
        marginLeft: "250px",
        marginRight: "250px",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "20px",
            marginRight: "20px",
        },
    }));

    const StyledSkills = styled(Paper)(({ theme }) => ({
        padding: "10px",
        border: "1px solid grey",
        width: "150px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
            width: "190px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100px",
        },
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "white",
            transition: "transform 0.3s ease-in-out",
        }
    }));

    return (
        <section id = "about">
            <StyledAbout>
                <Grid2 container spacing={2}>
                    <Typography variant={"h1"} fontWeight={200} marginBottom={"20px"} marginTop={"10px"}>About</Typography>
                </Grid2>

                <Grid container spacing={3} className="about" display="flex" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={3} display="flex" justifyContent="center">
                        <StyledSlide1 className="slide1">
                            <WorkspacePremiumIcon />
                            <Typography fontWeight={"bold"}>Experience</Typography>
                            <Typography>2+ years</Typography>
                            <Typography>Backend Development</Typography>
                            <Typography>Fullstack Development</Typography>
                        </StyledSlide1>
                    </Grid>

                    <Grid item display="flex" justifyContent="center" alignItems="center">
                        <CodeIcon fontSize="large"/>
                    </Grid>

                    <Grid item xs={12} md={3} display="flex" justifyContent="center">
                        <StyledSlide2 className="slide2">
                            <SchoolIcon />
                            <Typography fontWeight={"bold"}>Education</Typography>
                            <Typography>Graduação</Typography>
                            <Typography>Análise e Desenvolvimento de Sistemas </Typography>
                            <Typography>Professional C# - Udemy</Typography>
                        </StyledSlide2>
                    </Grid>
                </Grid>

                <Grid2 container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <StyledResume>
                            <Typography fontSize={"1.1rem"} textAlign={"justify"} style={{ textIndent: "4rem"}}>Meu nome é Guilherme Bomfim, tenho 26 anos, moro no Rio de Janeiro e atualmente estou atuando como desenvolvedor FullStack, com foco em Backend. Estou no penúltimo período da faculdade, cursando Análise e Desenvolvimento de Sistemas pelo SENAC. Meu foco tem sido aprender cada vez mais para melhorar como desenvolvedor Backend ou FullStack voltado para área de desenvovimento web. Mas não me privo apenas a web. Surgindo novas oportunidades, ficaria feliz em explorar outros universos dentro desse campo tão vasto.</Typography>
                            <br/>
                            <Typography fontSize={"1.1rem"} textAlign={"justify"} style={{ textIndent: "4rem"}} marginBottom={"20px"}>Acredito num mundo onde a tecnologia é nossa grande aliada e por isso, a busca pelo novo é indispensável.
                            Há 5 anos venho procurando aprender cada vez mais e conhecer novas tecnologias de modo a poder usar esse conhecimento para impactar de forma positiva a vida das pessoas. Em meu último trabalho, tive o privilégio de participar em projetos de software que empregaram mais de 100 funcionários e foram de ajuda para mais de 3 milhões de pessoas.</Typography>
                        </StyledResume>
                    </Grid>
                </Grid2>

                <Grid2 container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <StyledSkillsContainer>
                            <Typography fontSize={"5rem"} fontWeight={200} display="flex" justifyContent="center">Skills</Typography>
                        </StyledSkillsContainer>
                    </Grid>
                </Grid2>

                <Grid2 container spacing={2}>
                    <StyledSkillsContainer>
                        {[
                            "C#", ".NET", "Java", "Spring", "SQL Server", "MySQL",
                            "Javascript", "React", "HTML", "CSS", "Azure", "Git"
                        ].map((skill, index) => (
                            <Grid item xs={6} md={2} key={index} display="flex" justifyContent="center">
                                <StyledSkills>{skill}</StyledSkills>
                            </Grid>
                        ))}
                    </StyledSkillsContainer>
                </Grid2>
            </StyledAbout>
        </section>
  );
}

export default About;
