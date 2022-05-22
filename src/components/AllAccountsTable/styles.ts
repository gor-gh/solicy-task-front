import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tableRow: {
      '& > td:last-child': {
          display: 'flex',
          '& > a': {
            flex: 1,
          }
      },
  },
});

export default useStyles;