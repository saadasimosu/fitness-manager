import cyclingLogo from './images/cycling.svg';
import liftingLogo from './images/lifting.svg';
import runningLogo from './images/running.svg';
import swimmingLogo from './images/swimming.svg';

export const programTypes = {
  LIFTING: 'lifting',
  CYCLING: 'cycling',
  RUNNING: 'running',
  SWIMMING: 'swimming'
};

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