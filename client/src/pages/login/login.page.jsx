import { useRef, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Redux actions
import { login } from '../../store/actions/user.actions';

// Component
import Input from '../../components/ui/input/input.component';
import Button from '../../components/ui/button/button.component';
import Form from '../../components/ui/form/form.component';

import classes from './login.module.css';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [accountNumber, setAccountNumber] = useState(0)
	const [password, setPassword] = useState('')

	// Refs
	const accountInputRef = useRef();
	const passwordInputRef = useRef();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(login(accountNumber,password))
		navigate('/');
	};

	const onSignup = () => {
		navigate('/signup');
	};

	const header = 'To enter our app, please fill these fields';

	return (
		<div className={classes.container}>
			<Form header={header} submitHandler={submitHandler}>
			    <div className='input'>
					<label htmlFor="count">Your Count Number</label>
					<input type="number" value={accountNumber} onChange={e=>{setAccountNumber(e.target.value) }} />
				</div>
				<div className='input'>
					<label htmlFor="name">Password</label>
					<input type="password" value={password} onChange={e=>{setPassword(e.target.value) }} />
				</div>

				<div className={classes.actions}>
					<Button type='submit'>Log in</Button>
					<Button onClick={onSignup} type='button'>
						Create account
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default Login;
