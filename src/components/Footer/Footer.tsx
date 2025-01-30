import { Grid, styled, Typography } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const FooterBar = () => {

    const StyledFooterBar = styled("div")(({theme}) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.secondary.light,
        padding: "10px",
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
        },
      }));
      

      const StyledIconsFooterBar = styled("div")(({theme}) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px",
        gap: "150px",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            gap: "50px",
        },
      }));

      const StyledIcons = styled("div")(({theme}) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        padding: "5px",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          transition: "background-color 0.5s",
        },
      }));
  
    return (
        <>
            <StyledFooterBar>
                <Grid >
                    <StyledIconsFooterBar>
                        <StyledIcons>
                            <GitHubIcon onClick={() => window.open('https://github.com/GuilhermeBomfimDev', '_blank')}/>
                        </StyledIcons>
                        <StyledIcons>
                            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/guilherme-bomfim-7a87aa295/', '_blank')}/>
                        </StyledIcons>
                        <StyledIcons>
                            <EmailIcon onClick={() => window.location.href = 'mailto:guilherme.bomfim98@hotmail.com'}/>
                        </StyledIcons>
                    </StyledIconsFooterBar>
                </Grid>    
                
                <div>
                    <Typography>© 2025 Guilherme Guimarães</Typography>
                </div>
            </StyledFooterBar>
        </>
    );
  }
  
  
  export default FooterBar;