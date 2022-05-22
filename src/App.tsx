import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AllAccountsTable from './components/AllAccountsTable';
import AccountTable from './components/AccountTable';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/accounts' element={<AllAccountsTable />} />
        <Route path='/accounts'>
          <Route path=':accountId' element={<AccountTable />}/>
        </Route>
        <Route path='*' element={<Navigate to='/accounts' />} />
      </Routes>
    </div>
  );
}

export default App;
