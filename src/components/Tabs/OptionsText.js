import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
	FormControl,
	Input,
	InputLabel,
	InputAdornment,
	IconButton,
	Button,
	Typography,
	Grid,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

import List from '../List';

const OptionsText = () => {
	const [Text, setText] = useState('');
	const [Options, setOptions] = useState(
		JSON.parse(localStorage.getItem('Options')) || []
	);
	const [RandomOption, setRandomOption] = useState('');

	const inputRef = useRef();

	useEffect(() => {
		localStorage.setItem('Options', JSON.stringify(Options));
	}, [Options]);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!Text) return;
		setOptions([...Options, { id: uuidv4(), body: Text }]);
		setText('');
	};

	const handleRemove = (id) => {
		const index = Options.map((option) => option.id).indexOf(id);
		const newOptions = Options.map((option) => option);
		newOptions.splice(index, 1);
		setOptions(newOptions);
	};

	const handleRandomOption = (e) => {
		e.preventDefault();
		if (!Options.length) return;
		const randomIndex = Math.floor(Math.random() * Options.length);
		setRandomOption(Options[randomIndex].body);
	};

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<FormControl fullWidth>
					<InputLabel>Add new option</InputLabel>
					<Input
						inputRef={inputRef}
						autoFocus
						value={Text}
						onChange={(e) => handleChange(e)}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={(e) => {
										handleSubmit(e);
										inputRef.current.focus();
									}}
								>
									<Add />
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
			</form>
			<List payload={Options} handleRemove={handleRemove} />
			<Grid container justify="center" alignItems="center" direction="column">
				<Button
					variant="contained"
					color="primary"
					size="large"
					align="center"
					onClick={(e) => handleRandomOption(e)}
				>
					Generate random option
				</Button>
				<Typography variant="h3">{RandomOption}</Typography>
				<Typography
					style={{ fontStyle: 'italic', opacity: '0.7' }}
					variant="h5"
				>
					{Options.length > 1 ? null : 'Add more options'}
				</Typography>
			</Grid>
		</div>
	);
};

export default OptionsText;
