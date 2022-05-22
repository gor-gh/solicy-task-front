import {Link} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { IAccountData } from '../../types';
import useGlobalStyles from '../../styles/global';
import useStyles from './styles';
import LoaderIcon from '../LoaderIcon/LoaderIcon';

const AccountTable = () => {
    const globalClasses = useGlobalStyles();
    const classes = useStyles();
    const {data, loading, error} = useFetch(`http://localhost:80${window.location.pathname}`); 
    if (!data || error) return null;

    const accountKeys = Object.keys(data).filter(key => key !== 'actions');

    return (
        <div className={globalClasses.tableContainer}>
            {loading && <LoaderIcon />}
            {
                data && (
                    <table className={globalClasses.table}>
                    <tbody>
                        {
                            accountKeys.map((key) => (
                                <tr key={key} className={classes.accountInfoRow}>
                                    <td><b>{String(key).toUpperCase()}</b></td>
                                    <td>{String(data[key as keyof IAccountData])}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                )
            }
           
            <button className={classes.button}><Link to='/accounts'>Go Back</Link></button>
        </div>
    );
}

export default AccountTable;