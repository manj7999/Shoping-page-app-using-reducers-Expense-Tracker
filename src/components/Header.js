import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import { expensesActions } from '../store/expensesReducer'; // Import expenses actions
import { themeActions } from '../store/themeReducer'; // Import theme actions
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const darkMode = useSelector(state => state.theme.darkMode); // Get dark mode state
  const expenses = useSelector(state => state.expenses.expenses); // Get expenses from state

  const logouthandler = () => {
    dispatch(authActions.logout());
  };

  const toggleThemeHandler = () => {
    dispatch(themeActions.toggleTheme()); // Dispatch toggle theme action
  };

  const downloadExpensesHandler = () => {
    // Convert expenses to CSV format
    const csvContent = "data:text/csv;charset=utf-8," + 
                      expenses.map(e => `${e.title},${e.amount}`).join("\n");
    // Create a temporary link and trigger download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "expenses.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <header className={`${classes.header} ${darkMode ? classes.dark : ''}`}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logouthandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
      <button onClick={toggleThemeHandler}>Toggle Theme</button> {/* Add Toggle Theme button */}
      <button onClick={downloadExpensesHandler}>Download Expenses</button> {/* Add Download Expenses button */}
    </header>
  );
};

export default Header;