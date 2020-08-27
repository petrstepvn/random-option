import React, { useState } from 'react';

import { AppBar, Tabs, Tab, Box, Container } from '@material-ui/core';

import OptionsText from './Tabs/OptionsText';

const TabPanel = ({ value, index, children }) => {
	return (
		<div role="tabpanel" hidden={value !== index}>
			{value === index && <Box>{children}</Box>}
		</div>
	);
};

const Tabber = () => {
	const [value, setvalue] = useState(0);

	const handleChange = (event, newValue) => {
		setvalue(newValue);
	};
	return (
		<div>
			<AppBar position="static" style={{ marginBottom: '2rem' }}>
				<Tabs centered value={value} onChange={handleChange}>
					<Tab label="Text" />
					<Tab label="Number" />
				</Tabs>
			</AppBar>
			<Container maxWidth="xs">
				<TabPanel value={value} index={0}>
					<OptionsText />
				</TabPanel>
				<TabPanel value={value} index={1}>
					Too lazy to do
				</TabPanel>
			</Container>
		</div>
	);
};

export default Tabber;
