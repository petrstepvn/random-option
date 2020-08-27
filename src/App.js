import React, { useState } from 'react';
import {
	Container,
	TextField,
	FormControl,
	InputLabel,
	Input,
	IconButton,
	InputAdornment,
	Button,
	Typography
} from '@material-ui/core';
import List from './components/List';
import Add from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
	const [Text, setText] = useState('');
	const [Options, setOptions] = useState([]);
	const [RandomOption, setRandomOption] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!Text) return;
		setOptions([...Options, { id: uuidv4(), body: Text }]);
		setText('');
		console.log(Options);
	};

	const handleRemove = (id) => {
		const index = Options.map((option) => option.id).indexOf(id);
		const newOptions = Options.map((option) => option);
		newOptions.splice(index, 1);
		setOptions(newOptions);
	};

	const handleRandomOption = (e) => {
		e.preventDefault();
		const randomIndex = Math.floor(Math.random() * Options.length);
		setRandomOption(Options[randomIndex].body);
	};

	return (
		<Container maxWidth="xs">
			<form onSubmit={(e) => handleSubmit(e)}>
				<FormControl fullWidth>
					<InputLabel>Add new item</InputLabel>
					<Input
						value={Text}
						onChange={(e) => handleChange(e)}
						endAdornment={
							<InputAdornment position="end">
								<IconButton>
									<Add />
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
			</form>
			<List payload={Options} handleRemove={handleRemove} />
			<Button
				variant="contained"
				color="primary"
				size="large"
				onClick={(e) => handleRandomOption(e)}
			>
				Generate random option
			</Button>
			<Typography variant="h2">{RandomOption}</Typography>
		</Container>
	);
};

export default App;
