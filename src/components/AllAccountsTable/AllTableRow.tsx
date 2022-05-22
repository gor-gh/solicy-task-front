import {Link} from 'react-router-dom';
import { IAccountData } from '../../types';
import useStyles from './styles';

const AllTableRow = ({
    id,
    name,
    createdOn,
    owner,
    actions
}: IAccountData) => {
    const classes = useStyles();
    
    return (
        <tr className={classes.tableRow}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{createdOn}</td>
            <td>{owner}</td>
            <td>
                {actions && (
                    actions.map(action => (
                        <Link key={action.title} to={action.url}>{action.title}</Link>
                    ))
                )}
            </td>
        </tr>
    )
}

export default AllTableRow;