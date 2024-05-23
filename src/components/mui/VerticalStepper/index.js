import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  IconButton,
  styled,
  Typography,
  useTheme,
  Chip
} from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Box from "@mui/material/Box";
import StepLabel from "@mui/material/StepLabel";
import Step from "@mui/material/Step";
import Icons from "../../../common/icons";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.secondary.light,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <Icons.Settings />,
    2: <Icons.AccountCircle />,
    3: <Icons.Dashboard />,
    4: <Icons.JoinRight />,
    5: <Icons.CheckCircleOutline />,
    6: <Icons.Tune />,
    7: <Icons.Tag />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const VerticalStepper = ({ children, steps, activeStep, handleNextStep, handlePrevStep, isNextEnabled, checkList, hasDistanceButtons }) => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={1} sx={{
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        p: 1,
        borderRadius: 1,
      }}>
        <Grid item xs={9} sm={9} md={9}>
          <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />} >
            {steps &&
              steps.length > 0 &&
              steps.map((step) => (
                <Step
                  key={step.label}
                >
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {step.label}
                  </StepLabel>
                </Step>
              ))}
          </Stepper>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{
          borderLeft: `1px solid ${theme.palette.primary.main}`,
        }}>
          {checkList.map((checkList, index) => (
            <Box key={index} sx={{ display: 'flex' }}>
              {checkList.isMarked ? (<Icons.CheckCircle fontSize='small' color='primary' />) : (<Icons.CheckCircle fontSize='small' sx={{ color: '#777' }} color='#777' />)}
              <Typography sx={{ fontSize: 14, ml: 1, color: checkList.isMarked ? theme.palette.mode === "dark" ? '#fff' : "#000" : '#777', fontWeight: 'bold' }}>{checkList.label}</Typography>
              <Typography sx={{ fontSize: 14, ml: 1, color: theme.palette.secondary.main, fontWeight: 'bolder' }}>{checkList.highlights}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ padding: '20px', overflow: 'auto' }}>
        <Grid style={{ minHeight: 'calc(100% - 20px)' }} item xs={12} sm={12} md={12}>
          {children}
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <IconButton variant="outlined" size="small" sx={{ position: 'absolute', bottom: 25, right: 25 }} color="primary" onClick={() => {
            handleNextStep(activeStep + 1);
          }}
            disabled={isNextEnabled}
          >
            {activeStep === steps.length - 1 ? <Icons.Done /> : <Icons.ArrowForwardIos />}
          </IconButton>

          <IconButton variant="outlined" size="small" sx={{ position: 'absolute', bottom: 25, right: hasDistanceButtons ? 130 : 60 }} color="primary" onClick={() => {
            handlePrevStep(activeStep - 1);
          }}
            disabled={activeStep === 0}
          >
            <Icons.ArrowBackIos />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
};

VerticalStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  children: PropTypes.node,
  checkList: PropTypes.array.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  isNextEnabled: PropTypes.bool.isRequired,
  hasDistanceButtons: PropTypes.bool,
};

VerticalStepper.defaultProps = {
  steps: [],
  activeStep: 0,
  checkList: [],
  handleNextStep: () => { },
  handlePrevStep: () => { },
  isNextEnabled: true,
  hasDistanceButtons: false
}

export default memo(VerticalStepper);