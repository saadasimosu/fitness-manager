import cyclingLogo from './images/cycling.svg';
import liftingLogo from './images/lifting.svg';
import runningLogo from './images/running.svg';
import swimmingLogo from './images/swimming.svg';

export const programTypes = {
  LIFTING: 'Lifting',
  CYCLING: 'Cycling',
  RUNNING: 'Running',
  SWIMMING: 'Swimming'
};

export const programTypeOptions = Object.values(programTypes).map(programType => {
  return({
    text: programType,
    value: programType
  });
});

export const programTypeToLogoMap = {
  [programTypes.CYCLING]: cyclingLogo,
  [programTypes.LIFTING]: liftingLogo,
  [programTypes.RUNNING]: runningLogo,
  [programTypes.SWIMMING]: swimmingLogo
};

export const programTypeToColorMap = {
  [programTypes.CYCLING]: 'purple',
  [programTypes.LIFTING]: 'red',
  [programTypes.RUNNING]: 'teal',
  [programTypes.SWIMMING]: 'blue'
};