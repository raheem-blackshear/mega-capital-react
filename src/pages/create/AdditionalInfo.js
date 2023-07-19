import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { setAdditionalInfo } from '../../redux/slices/tokenListing';
import { useSnackbar } from 'notistack';
import { commify, formatEther } from '@ethersproject/units';
import { useIDOContract } from '../../hooks/useContract';

import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import {
  CardActionArea,
  Container,
  RadioGroup,
  Grid,
  Box,
  Paper,
  TextField,
  Stack,
  Typography,
  Divider,
  Button,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  InputAdornment,
  Radio
} from '@mui/material';
import axios from '../../utils/axios';
import { styled } from '@mui/material/styles';
import { DesktopDateTimePicker } from '@mui/lab';
import { ImImage, ImSphere, ImFacebook, ImTwitter, ImGithub, ImTelegram, ImInstagram } from 'react-icons/im';
import { IoLogoDiscord, IoLogoReddit } from 'react-icons/io5';
const DesktopDateTimePickerStyle = styled(DesktopDateTimePicker)(({ theme }) => ({
  color: 'blue',
  background: 'blue',
  '& .MuiCalendarPicker-root': {
    backgroundColor: 'red !important'
  }
}));
const AdditionalInfo = ({ goBack, goNext }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [poolFixedFees, setPoolFixedFees]=useState([]);
  const [tier, setTier] = useState('common');
  const idoContract = useIDOContract();

  const onChangeTier = (event) => {
    setTier(event.target.value);
  };
  useEffect(()=>{
    let unmounted=false;
    (async ()=>{
      try{
        const poolFixedFee=[];
        for(let i=0;i<4;i++)
          poolFixedFee.push(await idoContract.poolFixedFee(i));
        if(!unmounted)
          setPoolFixedFees(poolFixedFee);
      }catch(err){

      }
    })();
    return ()=>unmounted=true;
  },[]);
  const NewInfluencerSchema = Yup.object().shape({
    logo: Yup.string().url('Not a url').required('Logo is required'),
    website: Yup.string().url('Not a url'),
    // facebook: Yup.string().url("Not a url"),
    twitter: Yup.string().url('Not a url'),
    github: Yup.string().url('Not a url'),
    telegram: Yup.string().url('Not a url'),
    // instagram: Yup.string().url("Not a url"),
    discord: Yup.string().url('Not a url'),
    // reddit: Yup.string().url("Not a url"),
    description: Yup.string().required('Description is required')
  });
  const logo = useSelector((state) => state.tokenListing.logo);
  const website = useSelector((state) => state.tokenListing.website);
  // const facebook = useSelector((state) => state.tokenListing.facebook);
  const twitter = useSelector((state) => state.tokenListing.twitter);
  const github = useSelector((state) => state.tokenListing.github);
  const telegram = useSelector((state) => state.tokenListing.telegram);
  // const instagram = useSelector((state) => state.tokenListing.instagram);
  const discord = useSelector((state) => state.tokenListing.discord);
  // const tier = useSelector((state) => state.tokenListing.tier);
  // const reddit = useSelector((state) => state.tokenListing.reddit);
  const description = useSelector((state) => state.tokenListing.description);
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      logo,
      website,
      // facebook,
      twitter,
      github,
      telegram,
      // instagram,
      discord,
      // reddit,
      description,
      tier
    },
    validationSchema: NewInfluencerSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        console.log(values);
        dispatch(setAdditionalInfo({ ...values }));
        resetForm();
        goNext();
      } catch (error) {
        console.error(error);
        enqueueSnackbar('Oops, Something went wrong!', {
          variant: 'error'
        });
        setSubmitting(false);
      }
    }
  });
  const network = useSelector((state) => state.network.chainId);

  const { values, errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik;
  return (
    <FormikProvider value={formik}>
      <form onSubmit={handleSubmit}>
        <Paper
          sx={{
            p: '20px 30px',
            mx: 'auto',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(6px)'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                label="Logo URL"
                placeholder="Ex: https://..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                      <ImImage />
                    </InputAdornment>
                  )
                }}
                {...getFieldProps('logo')}
                error={Boolean(touched.logo && errors.logo)}
                helperText={touched.logo && errors.logo}
                sx={{
                  width: 1
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                label="Website"
                placeholder="Ex: https://..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                      <ImSphere />
                    </InputAdornment>
                  )
                }}
                {...getFieldProps('website')}
                error={Boolean(touched.website && errors.website)}
                helperText={touched.website && errors.website}
                sx={{
                  width: 1
                }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                fullWidth
                                label="Facebook"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                                            <ImFacebook />
                                        </InputAdornment>
                                    ),
                                }}
                                {...getFieldProps("facebook")}
                                error={Boolean(touched.facebook && errors.facebook)}
                                helperText={touched.facebook && errors.facebook}
                                sx={{
                                    width: 1,
                                    color: "white",
                                    "& .MuiInputLabel-root": { color: "white" },
                                    "& .MuiOutlinedInput-root": { color: "white" },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white",
                                    },
                                }}
                            />
                        </Grid> */}
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                label="Twitter"
                placeholder="Ex: https://twitter.com/..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                      <ImTwitter />
                    </InputAdornment>
                  )
                }}
                {...getFieldProps('twitter')}
                error={Boolean(touched.twitter && errors.twitter)}
                helperText={touched.twitter && errors.twitter}
                sx={{
                  width: 1
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                label="Github"
                placeholder="Ex: https://github.com/..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                      <ImGithub />
                    </InputAdornment>
                  )
                }}
                {...getFieldProps('github')}
                error={Boolean(touched.github && errors.github)}
                helperText={touched.github && errors.github}
                sx={{
                  width: 1
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                label="Telegram"
                placeholder="Ex: https://t.me/..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                      <ImTelegram />
                    </InputAdornment>
                  )
                }}
                {...getFieldProps('telegram')}
                error={Boolean(touched.telegram && errors.telegram)}
                helperText={touched.telegram && errors.telegram}
                sx={{
                  width: 1
                }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                fullWidth
                                label="Instagram"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                                            <ImInstagram />
                                        </InputAdornment>
                                    ),
                                }}
                                {...getFieldProps("instagram")}
                                error={Boolean(touched.instagram && errors.instagram)}
                                helperText={touched.instagram && errors.instagram}
                                sx={{
                                    width: 1,
                                    color: "white",
                                    "& .MuiInputLabel-root": { color: "white" },
                                    "& .MuiOutlinedInput-root": { color: "white" },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white",
                                    },
                                }}
                            />
                        </Grid> */}
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                label="Discord"
                placeholder="Ex: https://t.me/..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                      <IoLogoDiscord />
                    </InputAdornment>
                  )
                }}
                {...getFieldProps('discord')}
                error={Boolean(touched.discord && errors.discord)}
                helperText={touched.discord && errors.discord}
                sx={{
                  width: 1
                }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label="Reddit"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                                            <IoLogoReddit />
                                        </InputAdornment>
                                    ),
                                }}
                                {...getFieldProps("reddit")}
                                error={Boolean(touched.reddit && errors.reddit)}
                                helperText={touched.reddit && errors.reddit}
                                sx={{
                                    width: 1,
                                    color: "white",
                                    "& .MuiInputLabel-root": { color: "white" },
                                    "& .MuiOutlinedInput-root": { color: "white" },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white",
                                    },
                                }}
                            />
                        </Grid> */}
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                fullWidth
                label="Description"
                {...getFieldProps('description')}
                error={Boolean(touched.description && errors.description)}
                helperText={touched.description && errors.description}
                sx={{
                  width: 1
                }}
                multiline
                minRows={3}
                maxRows={6}
              />
            </Grid>
          </Grid>
          <Stack justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 3 }}>
            <Stack component="span" fontSize="1.2rem">
              Select Tier:
            </Stack>
            <RadioGroup value={tier} onChange={onChangeTier}>
              <Grid container spacing={3} sx={{ px: 2 }}>
                <Grid item md={3} xs={6}>
                  <Stack alignItems="center" sx={{ cursor: 'pointer' }}>
                    <Typography variant="h5">COMMON</Typography>
                    <CardActionArea>
                      <Paper
                        sx={{ width: 1, p: 2, border: `4px solid ${tier === 'common' ? '#e5e5e5' : 'transparent'}` }}
                      >
                        <Box>
                          <Stack alignItems="center" justifyContent="center" sx={{ height: 300 }}>
                            <Typography align="center" variant="h4">
                              COMMON TIER WITHOUT ANY SPECIAL PERKS
                            </Typography>
                          </Stack>
                          <Typography align="center" variant="h5">
                            FEE: {poolFixedFees[0] ? commify(formatEther(poolFixedFees[0])) : 0} {network == process.env.REACT_APP_ETHEREUM_CHAINID ? 'ETH' : 'BNB'}
                          </Typography>
                        </Box>
                      </Paper>
                      <FormControlLabel
                        label=""
                        value="common"
                        control={<Radio sx={{ display: 'none' }} />}
                        sx={{
                          top: 0,
                          margin: 0,
                          width: '100%',
                          height: '100%',
                          position: 'absolute'
                        }}
                      />
                    </CardActionArea>
                  </Stack>
                </Grid>

                <Grid item md={3} xs={6}>
                  <Stack alignItems="center" sx={{ cursor: 'pointer' }}>
                    <Typography variant="h5">GOLD</Typography>
                    <CardActionArea>
                      <Paper
                        sx={{ width: 1, p: 2, border: `4px solid ${tier === 'gold' ? '#fcd316' : 'transparent'}` }}
                      >
                        <Stack alignItems="center" justifyContent="center" sx={{ height: 300 }}>
                          <Typography align="center" variant="h4">
                            - GOLD BORDER
                          </Typography>
                          <Typography align="center" variant="h4">
                            - AUDIT OPTION
                          </Typography>
                          <Typography align="center" variant="h4">
                            - KYC OPTION
                          </Typography>
                        </Stack>
                        <Typography align="center" variant="h5">
                          FEE: {poolFixedFees[1] ? commify(formatEther(poolFixedFees[1])) : 0} {network == process.env.REACT_APP_ETHEREUM_CHAINID ? 'ETH' : 'BNB'}
                        </Typography>
                      </Paper>
                      <FormControlLabel
                        label=""
                        value="gold"
                        control={<Radio sx={{ display: 'none' }} />}
                        sx={{
                          top: 0,
                          margin: 0,
                          width: '100%',
                          height: '100%',
                          position: 'absolute'
                        }}
                      />
                    </CardActionArea>
                  </Stack>
                </Grid>

                <Grid item md={3} xs={6}>
                  <Stack alignItems="center">
                    <Typography variant="h5">PLATINUM</Typography>
                    <CardActionArea>
                      <Paper
                        sx={{ width: 1, p: 2, border: `4px solid ${tier === 'platinum' ? '#49f0ff' : 'transparent'}` }}
                      >
                        <Stack alignItems="center" justifyContent="center" sx={{ height: 300 }}>
                          <Typography align="center" variant="h4">
                            - PLATINUM BORDER
                          </Typography>
                          <Typography align="center" variant="h4">
                            - KYC INCLUDED
                          </Typography>
                          <Typography align="center" variant="h4">
                            - GEMPAD AMA INCLUDED
                          </Typography>
                          <Typography align="center" variant="h4">
                            - AUDIT OPTION
                          </Typography>
                          <Typography align="center" variant="h4">
                            & MORE
                          </Typography>
                        </Stack>
                        <Typography align="center" variant="h5">
                          FEE: CONTACT US
                        </Typography>
                      </Paper>
                      <FormControlLabel
                        label=""
                        value="platinum"
                        control={<Radio sx={{ display: 'none' }} />}
                        sx={{
                          top: 0,
                          margin: 0,
                          width: '100%',
                          height: '100%',
                          position: 'absolute'
                        }}
                      />
                    </CardActionArea>
                  </Stack>
                </Grid>

                <Grid item md={3} xs={6}>
                  <Stack alignItems="center">
                    <Typography variant="h5">DIAMOND</Typography>
                    <CardActionArea>
                      <Paper
                        sx={{ width: 1, p: 2, border: `4px solid ${tier === 'diamond' ? '#ab4bff' : 'transparent'}` }}
                      >
                        <Stack alignItems="center" justifyContent="center" sx={{ height: 300 }}>
                          <Typography align="center" variant="h4">
                            - DIAMOND BORDER
                          </Typography>
                          <Typography align="center" variant="h4">
                            - KYC INCLUDED
                          </Typography>
                          <Typography align="center" variant="h4">
                            - GEMPAD AMA INCLUDED
                          </Typography>
                          <Typography align="center" variant="h4">
                            - CHEAP AUDIT RATE
                          </Typography>
                          <Typography align="center" variant="h4">
                            - CMC & CG LISTING
                          </Typography>
                          <Typography align="center" variant="h4">
                            - CALLS BY PARTNERS
                          </Typography>
                          <Typography align="center" variant="h4">
                            & MORE!
                          </Typography>
                        </Stack>
                        <Typography align="center" variant="h5">
                          FEE: CONTACT US
                        </Typography>
                      </Paper>
                      <FormControlLabel
                        label=""
                        value="diamond"
                        control={<Radio sx={{ display: 'none' }} />}
                        sx={{
                          top: 0,
                          margin: 0,
                          width: '100%',
                          height: '100%',
                          position: 'absolute'
                        }}
                      />
                    </CardActionArea>
                  </Stack>
                </Grid>
              </Grid>
            </RadioGroup>

            {/* <Select
              {...getFieldProps('tier')}          
              fullWidth
              inputProps={{
                sx: {
                  display: 'flex',
                  alignItems: 'center'
                }
              }}
              MenuProps={{
                sx: {
                  '& .MuiPaper-root': {
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(20px)'
                  }
                }
              }}
              sx={{ width: 180 }}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="platinum">
                <Box component="img" src={`/promotions/2.png`} sx={{ width: 32, mr: 2 }} />
                Platinum
              </MenuItem>
              <MenuItem value="diamond">
                <Box component="img" src={`/promotions/3.png`} sx={{ width: 32, mr: 2 }} />
                Diamond
              </MenuItem>
              <MenuItem value="gold">
                <Box component="img" src={`/promotions/1.png`} sx={{ width: 32, mr: 2 }} />
                Bronze
              </MenuItem>
            </Select> */}
          </Stack>
          {(formik.values.tier === 'platinum' || formik.values.tier === 'diamond') && (
            <Typography align="center">
              Make sure to contact us to apply for this tier with all it's benefits
            </Typography>
          )}

          <Stack direction="row" justifyContent="center">
            <Button variant="outlined" color="secondary" style={{ marginTop: 20 }} onClick={goBack}>
              Back
            </Button>
            <Button variant="contained" color="secondary" style={{ marginTop: 20, marginLeft: 4 }} type="submit">
              Next
            </Button>
          </Stack>
        </Paper>
      </form>
    </FormikProvider>
  );
};
export default AdditionalInfo;
