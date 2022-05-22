import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ldsRipple: {
    display: 'inline-block',
    position: 'relative',
    width: 80,
    height: 80,
    marginTop: 100,
    '& div': {
      position: 'absolute',
      border: '4px solid #3aafa9',
      opacity: 1,
      borderRadius: '50%',
      animation: '$lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
    },
    '& div:nth-child(2)': {
      animationDelay: '-0.5s',
    },
  },
  '@keyframes lds-ripple': {
    '0%': {
      top: 36,
      left: 36,
      width: 0,
      height: 0,
      opacity: 1,
    },
    '100%': {
      top: 0,
      left: 0,
      width: 72,
      height: 72,
      opacity: 0,
    }
  },
});

export default useStyles;