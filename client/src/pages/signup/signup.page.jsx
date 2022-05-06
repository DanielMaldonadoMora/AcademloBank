import { useRef, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Redux actions
import { signup } from '../../store/actions/user.actions';

// Component
import Button from '../../components/ui/button/button.component';
import Form from '../../components/ui/form/form.component';

import classes from './signup.module.css';

const Signup = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	// Refs
	const nameInputRef = useRef();
	const passwordInputRef = useRef();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(signup(name,password))
		navigate('/login');
	};

	const onLogin = () => {
		navigate('/login');
	};

	const header = 'To create an account, enter these fields';

	return (
		<div className={classes.container}>
			<Form header={header} submitHandler={submitHandler}>
				<div className='input'>
				<label htmlFor="name">Your Name</label>
				<input type="text" value={name} onChange={e=>{setName(e.target.value) }} />
				</div>
				<div className='input'>
				<label htmlFor="name">Password</label>
				<input type="text" value={password} onChange={e=>{setPassword(e.target.value) }} />
				</div>
				

				<div className={classes.actions}>
					<Button type='submit'>Create account</Button>
					<Button onClick={onLogin} type='button'>
						Have an account? Log in
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default Signup;
