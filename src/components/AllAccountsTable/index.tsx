import {Navigate} from 'react-router-dom';
import useGlobalStyles from "../../styles/global";
import AllTableRow from "./AllTableRow";
import TableHeading from "./TableHeading";
import useFetch from '../../hooks/useFetch';
import { IAccountData } from "../../types";

const AllAccountsTable = () => {
    const globalClasses = useGlobalStyles();

    const {data, error} = useFetch('http://localhost:80/accounts');

    if (!data) return null;

    if (error) {
        return <Navigate to='/accounts' />
    }
    return (
        <div className={globalClasses.tableContainer}>
            <table className={globalClasses.table}>
                <TableHeading />
                <tbody>
                    {data && (
                        // @ts-ignore
                        data?.map((account: IAccountData) => (
                            <AllTableRow 
                                key={account.id}
                                id={account.id}
                                name={account.name}
                                createdOn={account.createdOn}
                                owner={account.owner}
                                actions={account.actions}
                            />
                        ))
                    )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AllAccountsTable;