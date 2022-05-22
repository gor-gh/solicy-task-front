import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  accountInfoRow: {
      display: 'flex',
      '& > td:first-child': {
            flex: 1,
      },
      '& > td:nth-child(2)': {
            flex: 2,
      }
  },
  button: {
      backgroundColor: '#388087',
      border: 'none',
      borderRadius: 6,
      padding: 5,
      marginTop: 25,
      '& a': {
        textDecoration: 'none',
        color: '#f6f6f2',
      }
  }
});

export default useStyles;