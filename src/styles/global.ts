import { createUseStyles } from 'react-jss';

const useGlobalStyles = createUseStyles({
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'calc(100vh - 101px)',
  },
  table: {
    '& td, & th': {
        border: '1px solid #388087',
        padding: 5,
    },
    borderCollapse: 'collapse',
    width: '70%',
    '& a': {
        color: '#388087',
        fontWeight: 900,
    }
  },
});

export default useGlobalStyles;