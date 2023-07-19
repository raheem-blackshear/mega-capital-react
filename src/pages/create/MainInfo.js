import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { setMainInfo } from '../../redux/slices/tokenListing';
import { formatUnits, commify, parseEther } from '@ethersproject/units';

import { useFormik, Form, FormikProvider } from 'formik';
import {
  Container,
  Alert as MuiAlert,
  Snackbar,
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
  Switch
} from '@mui/material';
import axios from '../../utils/axios';
import { styled } from '@mui/material/styles';
import { DesktopDateTimePicker } from '@mui/lab';
import { BigNumber } from '@ethersproject/bignumber';
import { useSnackbar } from 'notistack';
import { useIDOContract } from 'hooks/useContract';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const DesktopDateTimePickerStyle = styled(DesktopDateTimePicker)(({ theme }) => ({
  color: 'blue',
  background: 'blue',
  '& .MuiCalendarPicker-root': {
    backgroundColor: 'red !important'
  }
}));
const MainInfo = ({ goBack, goNext }) => {
  const teamVesting_amount = useSelector((state) => state.tokenListing.teamVesting_amount);
  const teamVesting_first_percent = useSelector((state) => state.tokenListing.teamVesting_first_percent);
  const teamVesting_first_period = useSelector((state) => state.tokenListing.teamVesting_first_period);
  const teamVesting_each_percent = useSelector((state) => state.tokenListing.teamVesting_each_percent);
  const teamVesting_each_period = useSelector((state) => state.tokenListing.teamVesting_each_period);
  const decimals = useSelector((state) => state.tokenListing.decimals);
  const allowance = useSelector((state) => state.tokenListing.allowance);
  const presale_rate = useSelector((state) => state.tokenListing.presale_rate);
  const soft_cap = useSelector((state) => state.tokenListing.soft_cap);
  const hard_cap = useSelector((state) => state.tokenListing.hard_cap);
  const min_buy = useSelector((state) => state.tokenListing.min_buy);
  const max_buy = useSelector((state) => state.tokenListing.max_buy);
  // const refund = useSelector((state) => state.tokenListing.refund);
  const whiteListable = useSelector((state) => state.tokenListing.whiteListable);
  const dex_amount = useSelector((state) => state.tokenListing.dex_amount);
  const dex_rate = useSelector((state) => state.tokenListing.dex_rate);
  const dex_lockup = useSelector((state) => state.tokenListing.dex_lockup);
  const start_date = useSelector((state) => state.tokenListing.startDate);
  const end_date = useSelector((state) => state.tokenListing.endDate);
  const list_date = useSelector((state) => state.tokenListing.listDate);
  const symbol = useSelector((state) => state.tokenListing.symbol);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const idoContract = useIDOContract();
  const [poolTokenPercentFee, setPoolTokenPercentFee] = useState(0);
  const [teamVestingExisted, setTeamVestingExisted] = useState(teamVesting_amount > 0 ? true : false);
  useEffect(() => {
    let unmounted = false;
    (async () => {
      try {
        let tmp = await idoContract.poolTokenPercentFee();
        if (!unmounted) setPoolTokenPercentFee(Number(tmp));
      } catch (err) { }
    })();
    return () => (unmounted = true);
  }, []);
  const NewInfluencerSchema = Yup.object().shape({
    presale_rate: Yup.number().required('Presale Rate is required').positive(),
    // soft_cap: Yup.number()
    //   .required('Soft Cap is required')
    //   .positive(),
    // hard_cap: Yup.number()
    //   .required('Hard Cap is required')
    //   .positive()
    //   .when('soft_cap', (soft_cap, schema) => {
    //     return soft_cap ? schema.moreThan(soft_cap, 'Hard Cap is more than Soft Cap') : schema.moreThan(0);
    //   }),
    // min_buy: Yup.number()
    //   .required('Min Buy is required')
    //   .positive()
    //   .when('hard_cap', (hard_cap, schema) => {
    //     return hard_cap ? schema.lessThan(hard_cap, 'Min Buy is less than Hard Cap') : schema.lessThan(100000000000);
    //   }),
    // max_buy: Yup.number()
    //   .required('Max Buy is required')
    //   .positive()
    //   .when('hard_cap', (hard_cap, schema) => {
    //     return hard_cap ? schema.lessThan(hard_cap, 'Min Buy is less than Hard Cap') : schema.lessThan(100000000000);
    //   })
    //   .when('min_buy', (min_buy, schema) => {
    //     return min_buy
    //       ? schema.min(min_buy, 'Max Buy should be same or bigger than Min Buy')
    //       : schema.lessThan(100000000000);
    //   }),
    // // refund: Yup.string().required("Refund is required"),
    // whiteListable: Yup.string().required('whiteListable is required'),
    // dex_amount: Yup.number()
    //   .required('Liquidity amount is required')
    //   .min(51, 'Liquidity is more than 51%')
    //   .lessThan(100, 'Liquidity is less than 100%'),
    // dex_rate: Yup.number()
    //   .required('Dex rate is required')
    //   .positive()
    //   .when('presale_rate', (presale_rate, schema) => {
    //     return schema.moreThan(0, 'Dex Rate should be more than 0');
    //   }),
    // dex_lockup: Yup.number()
    //   .required('Liquidity lock up is required')
    //   .min(30, 'Lock up days should be 30days as minimum'),
    // teamVesting_amount: Yup.number().required().min(0),
    // teamVesting_first_percent: Yup.number()
    //   .required('First released amount is required')
    //   .when('teamVesting_amount', (teamVesting_amount, schema) => {
    //     return teamVesting_amount > 0 ? schema.moreThan(0, 'First released amount is required') :
    //       schema.min(0, 'First released amount should be 0').max(0, 'First released amount should be 0');
    //   }),
    // teamVesting_first_period: Yup.number()
    //   .required('First released time is required')
    //   .when('teamVesting_first_percent', (teamVesting_first_percent, schema) => {
    //     return teamVesting_first_percent > 0 ? schema.min(3, 'First released time should not be less than 3 days') :
    //       schema.min(0, 'First released time should be 0').max(0, 'First released time should be 0');
    //   }),
    // teamVesting_each_percent: Yup.number()
    //   .required('Each released amount is required')
    //   .when('teamVesting_amount', (teamVesting_amount, schema) => {
    //     return teamVesting_amount > 0 ? schema.min(0, 'Each released amount >= 0') :
    //       schema.min(0, 'Each released amount should be 0').max(0, 'Each released amount should be 0');
    //   })
    //   .when('teamVesting_first_percent', (teamVesting_first_percent, schema) => {
    //     return teamVesting_first_percent
    //       ? schema.max(100 - teamVesting_first_percent, 'Firs + each released amount should not more than 100%')
    //       : schema.max(100);
    //   }),
    // teamVesting_each_period: Yup.number()
    //   .required('Each released time is required')
    //   .when('teamVesting_each_percent', (teamVesting_each_percent, schema) => {
    //     return teamVesting_each_percent > 0 ? schema.min(1, 'Each released time should not be less than 1 day') :
    //       schema.min(0, 'Each released time should be 0').max(0, 'Each released time should be 0');
    //   })

  });
  const currentDateTime = new Date();
  currentDateTime.setSeconds(0);
  currentDateTime.setMilliseconds(0);
  const [startDate, setStartDate] = useState(start_date || currentDateTime.setHours(currentDateTime.getHours() + 1));
  const [endDate, setEndDate] = useState(end_date || currentDateTime.setHours(currentDateTime.getHours() + 24));
  const [listDate, setListDate] = useState(list_date || currentDateTime);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      presale_rate,
      soft_cap,
      hard_cap,
      min_buy,
      max_buy,
      // refund,
      whiteListable,
      dex_amount,
      dex_rate,
      dex_lockup,
      teamVesting_amount,
      teamVesting_first_percent,
      teamVesting_first_period,
      teamVesting_each_percent,
      teamVesting_each_period
    },
    validationSchema: NewInfluencerSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        // if (values.teamVesting_first_percent + values.teamVesting_first_percent > 100) {
        //   enqueueSnackbar('Oops, Team vesting total percent exceeds 100%!', {
        //     variant: 'error'
        //   });
        //   setSubmitting(false);
        //   return;
        // }
        // if (new Date(startDate).getTime() < Date.now()) {
        //   enqueueSnackbar('Oops, Presale start time wrong!', {
        //     variant: 'error'
        //   });
        //   setSubmitting(false);
        //   return;
        // }
        // if (new Date(endDate).getTime() - new Date(startDate).getTime() < 24 * 3600 * 1000) {
        //   enqueueSnackbar('Oops, Presale period is incorrect!', {
        //     variant: 'error'
        //   });
        //   setSubmitting(false);
        //   return;
        // }
        // if (new Date(listDate).getTime() - new Date(endDate).getTime() < 0) {
        //   enqueueSnackbar('Oops, DEX listing time should be later than presale end time!', {
        //     variant: 'error'
        //   });
        //   setSubmitting(false);
        //   return;
        // }
        if (Number(formatUnits(allowance, decimals)) <
          Number(((Number(values.teamVesting_amount)*100 +
            Number(values.presale_rate) * Number(values.hard_cap) * 100 +
            (Number(values.hard_cap) * Number(values.dex_amount) * Number(values.dex_rate))) *
            (100 + Number(poolTokenPercentFee)) / 10000).toPrecision(15))) {
          enqueueSnackbar(`${commify(Number(((Number(values.teamVesting_amount)*100 +
            Number(values.presale_rate) * Number(values.hard_cap) * 100 +
            (Number(values.hard_cap) * Number(values.dex_amount) * Number(values.dex_rate))) *
            (100 + Number(poolTokenPercentFee)) / 10000).toPrecision(15)) - Number(formatUnits(allowance, decimals)))}
          ${" "} ${symbol} needed more to create a pool!`, {
            variant: 'error'
          });

          setSubmitting(false);
          return;
        }
        dispatch(setMainInfo({ ...values, startDate, endDate, listDate }));
        resetForm();
        setSubmitting(false);
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
  const handleTeamVesting = (e) => {
    const { values } = formik;
    if (!e.target.checked) {
      values.teamVesting_amount = 0;
      values.teamVesting_first_percent = 0;
      values.teamVesting_first_period = 0;
      values.teamVesting_each_percent = 0;
      values.teamVesting_each_period = 0;
    }
    setTeamVestingExisted(e.target.checked);
  };
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
          <Stack spacing={3}>
            <Stack spacing={1}>
              <TextField
                fullWidth
                label="Presale Rate"
                type="number"
                {...getFieldProps('presale_rate')}
                error={Boolean(touched.presale_rate && errors.presale_rate)}
                helperText={touched.presale_rate && errors.presale_rate}
              />
              <Stack component="span" color="success.main">
                If I spend 1 {network == process.env.REACT_APP_ETHEREUM_CHAINID ? 'ETH' : 'BNB'} how many tokens will I
                receive?
              </Stack>
            </Stack>
            <Stack spacing={1} flexGrow={1}>
              <TextField
                fullWidth
                label="Dex listing rate"
                type="number"
                {...getFieldProps('dex_rate')}
                error={Boolean(touched.dex_rate && errors.dex_rate)}
                helperText={touched.dex_rate && errors.dex_rate}
              />
            </Stack>
            <Stack direction="row" spacing={3} alignItems="flex-start">
              {/* <Stack spacing={1} flexGrow={1} >
                                <Select
                                    labelId="refund-label"
                                    id="refund-select"
                                    {...getFieldProps("refund")}
                                    inputProps={{
                                        sx: {
                                            // width: 160,
                                            width: 1,
                                            border: "1px solid white",
                                            color: "white",
                                            display: "flex",
                                        },
                                    }}
                                    MenuProps={{
                                        sx: {
                                            "& .MuiPaper-root": {
                                                background: "rgba(255, 255, 255, 0.2)",
                                                backdropFilter: "blur(6px)",
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value="refund">
                                        Refund
                                    </MenuItem>
                                    <MenuItem value="burn">
                                        Burn
                                    </MenuItem>
                                </Select>
                            </Stack> */}
              <Stack spacing={1} flexGrow={1}>
                <TextField
                  fullWidth
                  label="Dex Liquidity (%)"
                  type="number"
                  {...getFieldProps('dex_amount')}
                  error={Boolean(touched.dex_amount && errors.dex_amount)}
                  helperText={touched.dex_amount && errors.dex_amount}
                />
              </Stack>
              <Stack spacing={1} flexGrow={1}>
                <TextField
                  fullWidth
                  label="Liquidity Lockup (days)"
                  type="number"
                  {...getFieldProps('dex_lockup')}
                  error={Boolean(touched.dex_lockup && errors.dex_lockup)}
                  helperText={touched.dex_lockup && errors.dex_lockup}
                />
              </Stack>
            </Stack>
            <Stack direction="row" spacing={3} alignItems="flex-start">
              <Stack spacing={1} flexGrow={1}>
                <TextField
                  fullWidth
                  label={network == process.env.REACT_APP_ETHEREUM_CHAINID ? 'Soft Cap(ETH)' : 'Soft Cap(BNB)'}
                  type="number"
                  {...getFieldProps('soft_cap')}
                  error={Boolean(touched.soft_cap && errors.soft_cap)}
                  helperText={touched.soft_cap && errors.soft_cap}
                />
              </Stack>
              <Stack spacing={1} flexGrow={1}>
                <TextField
                  fullWidth
                  label={network == process.env.REACT_APP_ETHEREUM_CHAINID ? 'Hard Cap(ETH)' : 'Hard Cap(BNB)'}
                  type="number"
                  {...getFieldProps('hard_cap')}
                  error={Boolean(touched.hard_cap && errors.hard_cap)}
                  helperText={touched.hard_cap && errors.hard_cap}
                />
              </Stack>
            </Stack>
            <Stack direction="row" spacing={3} alignItems="flex-start">
              <Stack spacing={1} flexGrow={1}>
                <TextField
                  fullWidth
                  label={network == process.env.REACT_APP_ETHEREUM_CHAINID ? 'Minimum Buy(ETH)' : 'Minimum Buy(BNB)'}
                  type="number"
                  {...getFieldProps('min_buy')}
                  error={Boolean(touched.min_buy && errors.min_buy)}
                  helperText={touched.min_buy && errors.min_buy}
                />
              </Stack>
              <Stack spacing={1} flexGrow={1}>
                <TextField
                  fullWidth
                  label={network == process.env.REACT_APP_ETHEREUM_CHAINID ? 'Maximum Buy(ETH)' : 'Maximum Buy(BNB)'}
                  type="number"
                  {...getFieldProps('max_buy')}
                  error={Boolean(touched.max_buy && errors.max_buy)}
                  helperText={touched.max_buy && errors.max_buy}
                />
              </Stack>
            </Stack>

            <Stack direction="row" spacing={3} alignItems="flex-start">
              <Stack spacing={1} flexGrow={1}>
                <Stack component="span" fontSize="0.7rem">
                  Start Date (Local)
                </Stack>
                <DesktopDateTimePickerStyle
                  value={startDate}
                  minDate={new Date('2017-01-01')}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  PaperProps={{
                    sx: {
                      '& .MuiPickersDay-root': {
                        color: 'red !important',
                        width: '100%'
                      }
                    }
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} margin="normal" />}
                />
              </Stack>
              <Stack spacing={1} flexGrow={1}>
                <Stack component="span" fontSize="0.7rem">
                  End Date (Local)
                </Stack>
                <DesktopDateTimePickerStyle
                  value={endDate}
                  minDate={new Date('2017-01-01')}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  PaperProps={{
                    sx: {
                      '& .MuiPickersDay-root': {
                        color: 'red !important'
                      }
                    }
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} margin="normal" />}
                />
              </Stack>
            </Stack>
            <Stack direction="row" spacing={3} alignItems="flex-start">
              <Stack spacing={1} flex={1}>
                <Stack component="span" fontSize="0.7rem">
                  Estimated Dex Listing Date (Local)
                </Stack>
                <DesktopDateTimePickerStyle
                  value={listDate}
                  minDate={new Date('2017-01-01')}
                  onChange={(newValue) => {
                    setListDate(newValue);
                  }}
                  PaperProps={{
                    sx: {
                      '& .MuiPickersDay-root': {
                        color: 'red !important',
                        width: '100%'
                      }
                    }
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} margin="normal" />}
                />
              </Stack>
              <Stack spacing={1} flex={1}>
                <Stack component="span" fontSize="0.7rem">
                  Presale Type
                </Stack>
                <Select
                  labelId="whiteListable-label"
                  id="whiteListable-select"
                  {...getFieldProps('whiteListable')}
                  MenuProps={{
                    sx: {
                      '& .MuiPaper-root': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(6px)'
                      }
                    }
                  }}
                >
                  <MenuItem value="whiteListable">Whitelist</MenuItem>
                  <MenuItem value="all">Public</MenuItem>
                </Select>
              </Stack>

            </Stack>
            <Stack direction="row" spacing={3} alignItems="flex-start">
              *Time is displayed locally.
            </Stack>
            <Stack direction="row" spacing={3} alignItems="flex-start">
              {/* <FormControlLabel
                control={<Checkbox checked={teamVestingExisted} onChange={handleTeamVesting} color="primary" />}
                label="Enable Team Vesting ? If you have team tokens, lock them with vesting for additional security and trust to your investors."
              /> */}
              <FormControlLabel
                control={<Switch checked={teamVestingExisted} onChange={handleTeamVesting} color="primary" />}
                label="Add Team Token Vesting"
              />
              <Alert variant="outlined" severity="success">
                Lock your team tokens with a vesting schedule for further transparency and trust.
              </Alert>
            </Stack>
            {teamVestingExisted ? (
              <>
                <Stack direction="row" spacing={3} alignItems="flex-start">
                  <TextField
                    fullWidth
                    label="Total team vesting tokens"
                    type="number"
                    {...getFieldProps('teamVesting_amount')}
                    error={Boolean(touched.teamVesting_amount && errors.teamVesting_amount)}
                    helperText={touched.teamVesting_amount && errors.teamVesting_amount}
                  />
                </Stack>
                <Stack direction="row" spacing={3} alignItems="flex-start">
                  <Stack spacing={1} flexGrow={1}>
                    <TextField
                      fullWidth
                      label="First token release (percent)"
                      type="number"
                      {...getFieldProps('teamVesting_first_percent')}
                      error={Boolean(touched.teamVesting_first_percent && errors.teamVesting_first_percent)}
                      helperText={touched.teamVesting_first_percent && errors.teamVesting_first_percent}
                    />
                  </Stack>
                  <Stack spacing={1} flexGrow={1}>
                    <TextField
                      fullWidth
                      label="First token release after listing (days)"
                      type="number"
                      {...getFieldProps('teamVesting_first_period')}
                      error={Boolean(touched.teamVesting_first_period && errors.teamVesting_first_period)}
                      helperText={touched.teamVesting_first_period && errors.teamVesting_first_period}
                    />
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={3} alignItems="flex-start">
                  <Stack spacing={1} flexGrow={1}>
                    <TextField
                      fullWidth
                      label="Team token release each cycle (percent)"
                      type="number"
                      {...getFieldProps('teamVesting_each_percent')}
                      error={Boolean(touched.teamVesting_each_percent && errors.teamVesting_each_percent)}
                      helperText={touched.teamVesting_each_percent && errors.teamVesting_each_percent}
                    />
                  </Stack>
                  <Stack spacing={1} flexGrow={1}>
                    <TextField
                      fullWidth
                      label="Vesting period each cycle (days)"
                      type="number"
                      {...getFieldProps('teamVesting_each_period')}
                      error={Boolean(touched.teamVesting_each_period && errors.teamVesting_each_period)}
                      helperText={touched.teamVesting_each_period && errors.teamVesting_each_period}
                    />
                  </Stack>
                </Stack>
              </>
            ) : (
              ''
            )}
            {Number(formatUnits(allowance, decimals)) >=
              Number(((Number(values.teamVesting_amount)*100 +
                Number(values.presale_rate) * Number(values.hard_cap) * 100 +
                (Number(values.hard_cap) * Number(values.dex_amount) * Number(values.dex_rate))) *
                (100 + Number(poolTokenPercentFee)) / 10000).toPrecision(15)) ? (
              <Stack
                direction="row"
                spacing={3}
                alignItems="flex-start"
                marginLeft="auto!important"
                marginRight="auto!important"
                fontSize="0.8rem"
                color="warning.main"
              >
                {commify(Number(((Number(values.teamVesting_amount)*100 +
                  Number(values.presale_rate) * Number(values.hard_cap) * 100 +
                  (Number(values.hard_cap) * Number(values.dex_amount) * Number(values.dex_rate))) *
                  (100 + Number(poolTokenPercentFee)) / 10000).toPrecision(15)))}{' '}
                {symbol} needed to create a pool!
              </Stack>
            ) : (
              <Stack
                direction="row"
                spacing={3}
                alignItems="flex-start"
                marginLeft="auto!important"
                marginRight="auto!important"
              >
                <Alert variant="outlined" severity="error" sx={{ mt: 2, wordWrap: 'break-word' }}>
                  {commify(Number(((Number(values.teamVesting_amount)*100 +
                    Number(values.presale_rate) * Number(values.hard_cap) * 100 +
                    (Number(values.hard_cap) * Number(values.dex_amount) * Number(values.dex_rate))) *
                    (100 + Number(poolTokenPercentFee)) / 10000).toPrecision(15)))}{' '}
                  {symbol} needed to create a pool!
                  <br />( {commify(Number(formatUnits(allowance, decimals)))} {symbol} allowed!
                  <br />
                  {commify(Number(((Number(values.teamVesting_amount)*100 +
                    Number(values.presale_rate) * Number(values.hard_cap) * 100 +
                    (Number(values.hard_cap) * Number(values.dex_amount) * Number(values.dex_rate))) *
                    (100 + Number(poolTokenPercentFee)) / 10000).toPrecision(15)) -
                    Number(formatUnits(allowance, decimals))
                  )}{' '}
                  {symbol} needed more! )
                </Alert>
              </Stack>
            )}
            <Stack direction="row" spacing={3} alignItems="flex-start"></Stack>
          </Stack>
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
export default MainInfo;
