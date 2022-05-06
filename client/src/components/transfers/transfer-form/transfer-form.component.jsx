import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { newTransfer } from '../../../store/actions/transfers.actions';

// Components
import Modal from '../../ui/modal/modal.component';
import Input from '../../ui/input/input.component';
import Button from '../../ui/button/button.component';

import classes from './transfer-form.module.css';

const TransferForm =  ({ onHideModal }) => {
	const dispatch = useDispatch();
	const [reciverUserId, setReciverUserId] = useState(0)
	const [amount, setAmount] = useState(0)
	const senderUserId =  useSelector((state) => state.users.user.accountNumber);

	

	const submitHandler = e => {
		e.preventDefault();
		console.log(reciverUserId,amount);

		dispatch(newTransfer( amount,senderUserId, reciverUserId));
		
		onHideModal();
	};

	return (
		<Modal onClick={onHideModal}>
			<h3 className={classes.title}>
				To make a transfer, please enter the following information
			</h3>
			<form onSubmit={submitHandler} className={classes['transfer-form']}>
				<div className='input'>
					<label htmlFor="name">Account to send</label>
					<input type="number" value={reciverUserId} onChange={e=>{setReciverUserId(e.target.value) }} />
				</div>
				<div className='input'>
					<label htmlFor="name">Amount</label>
					<input type="number" value={amount} onChange={e=>{setAmount(e.target.value) }} />
				</div>
				{console.log(senderUserId)}
				<Button>Transfer!</Button>
			</form>
		</Modal>
	);
};

export default TransferForm;
