import {
  Box,
  Typography,
  Grid,
} from '@mui/material';
import ProjectCard from 'components/ProjectCard'
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { MHidden} from '../../components/@material-extend';
 
import { TRANSLATIONS_ZH } from "./translations/zh/translations";
import { TRANSLATIONS_EN } from "./translations/en/translations";
import { TRANSLATIONS_RU } from "./translations/ru/translations";
import { TRANSLATIONS_TU } from "./translations/tu/translations";
i18n
 .use(initReactI18next)
 .use(LanguageDetector)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     zh: {
       translation: TRANSLATIONS_ZH
     },
     ru: {
       translation: TRANSLATIONS_RU
     },
     tu: {
       translation: TRANSLATIONS_TU
     },
   },
   lng : document.querySelector('html').lang,
   fallbackLng: "en",
   detection: {
     order: ['cookie', 'cookie', 'localStorage', 'path','subdomain'],
     caches: ['cookie'],
   }
 });
 
 i18n.changeLanguage("en")

export default function Heading(){
  const { t } = useTranslation();
  const font_Family = 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
  return(
      <>
      
      <MHidden width="mdDown">
      <Grid data-aos="zoom-out"  spacing={2} sx={{ paddingTop: '130px', marginBottom: '49px'}} position="relative" display="flex" >
        <Grid container sm={1.5} >
          <Grid container  direction="column" marginLeft="30px" spacing={2}>
          {/* <Box component="a" marginBottom='5px' href={"https://discord.com/invite/zR2k28g3d9"} alignItems="center" sx={{width: 42, height: 42, borderRadius : "50%", backgroundImage: 'radial-gradient(rgb(35, 35, 35) 40%, white 15%, rgb(35, 35, 35)) 60%' }}> */}
            <Box component="a" marginBottom='10px' style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://discord.gg/dzjkkBfxug"} alignItems="center" sx={{width: 42, height: 42, bgcolor : "#232323", borderRadius : "50%", padding : '10px'}}>
              <Box  component="img"  src={"my_public/images/github.png"}/>
            </Box>
            <Box component="a"  marginBottom='5px' style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://twitter.com/Megacapitals"} alignItems="center" sx={{width: 42, height: 42, bgcolor : "#232323", borderRadius : "50%", padding : '10px' }} >
              <Box  component="img" src={"my_public/images/twitter (2).png"}/>
            </Box>
            <Box component="a"  marginBottom='10px' style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://t.me/MegacapitalVC"} alignItems="center" sx={{width: 42, height: 42, bgcolor : "#232323", borderRadius : "50%", padding : '10px' }} >
              <Box  component="img" src={"my_public/images/paper-plane.png"}/>
            </Box>
            <Box component="a"  marginBottom='10px' style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://medium.com/@megacapital.io"} alignItems="center" sx={{width: 42, height: 42, bgcolor : "#232323", borderRadius : "50%", padding : '10px' }} >
              <Box  component="img" src={"my_public/images/medium (2).png"}/>
            </Box>
            <Box component="a"  marginBottom='5px' style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://megacapital-io.gitbook.io/megacapital.io"} alignItems="center" sx={{width: 42, height: 42, bgcolor : "#232323", borderRadius : "50%", padding : '10px' }} >
              <Box  component="img" src={"my_public/images/gitbook-pngrepo-com.png"}/>
            </Box>
          </Grid>
        </Grid>
        <Grid item sm={5.3} marginLeft="10px">
          <Grid>
          <h2 style={{fontSize:'50px', color:"white"}} className="mb-5 fw-bold">{t('MEGACAPITAL_IS')}<br></br> {t('AN_ALL_IN_ONE')}</h2>
          </Grid>
          {/* <p style={{ fontSize: '20px', marginBottom: '20px' }}>Megacapital  is a decentr alized venture capital community-based with all-in-one Multichain & Multi-Launchpad investment ecosystem for Metaverse, GamiFI and DEFI .</p> */}
          <Grid marginTop={9}>
          <h4 className='mb-7 fw-bold' fontFamily={font_Family}>
            <span style={{color:'#4EB4E2'}}>{t('Megacapital')}</span>&nbsp;<span style={{color:'white'}}>{t('is_a_decentralized')} </span>
            <span style={{color:'#4EB4E2'}}>&nbsp;{t('venture')} <br/> {t('capital')}</span><span style={{color:'white'}}> {t('community_based_with')} </span>
            <span style={{color:'#4EB4E2'}}>&nbsp;{t('all_in_')}<br/>{t('one_Multichain')} &amp; {t('Multi_Launchpad')}</span> <br/> <span style={{color:'white'}}>{t('investment_ecosystem_for')}&nbsp;</span>
            <span style={{color:'#4EB4E2'}}>{t('Metaverse')},<br/> {t('GamiFi')}&nbsp;</span><span  style={{color:'white'}}>{t('and')} </span> <span style={{color:'#4EB4E2'}}>{t('DEFI')}.</span>
          </h4>
          </Grid>
          <Grid marginTop="40px" container spacing={2}>
            <Grid item component="a" href="/idodeals" class="hero-buttons btn btn-info text-light mx-3">BUY MEGA</Grid>
            <Grid item component="a" href="/stakepad" class="button-text hero-buttons btn btn-outline-info mx-1">STAKE MEGA</Grid>
            <Grid item component="a" href="#" class="hero-buttons btn btn-dark mx-3">JOIN THE COMMUNITY</Grid>
          </Grid>
        </Grid>
        <Grid>
          <ProjectCard></ProjectCard>
        </Grid>
      </Grid>
      </MHidden>
      <MHidden width="mdUp">
          <Grid  paddingLeft="13%" paddingRight="13%"><ProjectCard></ProjectCard></Grid>
          
          <Grid  paddingLeft="13%" paddingRight="13%" >
            <h2 style={{fontSize:'50px', color:"white"}} className="mb-5 fw-bold">{t('MEGACAPITAL_IS')}<br></br> {t('AN_ALL_IN_ONE')}</h2>
          </Grid>
          <h4 className='mb-7 fw-bold' fontFamily={font_Family}>
            <span style={{color:'#4EB4E2'}}>{t('Megacapital')}</span>&nbsp;<span style={{color:'white'}}>{t('is_a_decentralized')} </span>
            <span style={{color:'#4EB4E2'}}>&nbsp;{t('venture')} <br/> {t('capital')}</span><span style={{color:'white'}}> {t('community_based_with')} </span>
            <span style={{color:'#4EB4E2'}}>&nbsp;{t('all_in_')}<br/>{t('one_Multichain')} &amp; {t('Multi_Launchpad')}</span> <br/> <span style={{color:'white'}}>{t('investment_ecosystem_for')}&nbsp;</span>
            <span style={{color:'#4EB4E2'}}>{t('Metaverse')},<br/> {t('GamiFi')}&nbsp;</span><span  style={{color:'white'}}>{t('and')} </span> <span style={{color:'#4EB4E2'}}>{t('DEFI')}.</span>
          </h4>
      </MHidden>
      </>
  );
}