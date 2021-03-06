import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../store/actions/user.actions';
import classes from './header.module.css';

const Header = () => {
	const dispatch=useDispatch()
	const id =  useSelector((state) => state.users?.user?.id);
	return (
		<header className={classes.header}>
			<div className={classes.brand}>
				<a href="/">Academlo Bank</a>
			</div>

			<nav className={classes.navigation}>
				<ul>
					<li>
						<Link to="/login" onClick={()=>dispatch(logout(id))}>Change account</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
