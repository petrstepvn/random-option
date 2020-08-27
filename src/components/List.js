import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

export default function CheckboxList({ payload, handleRemove }) {
	return (
		<List>
			{payload.map((option) => (
				<ListItem key={option.id} button role={undefined}>
					<ListItemText id={option.id} primary={option.body} />
					<ListItemSecondaryAction onClick={() => handleRemove(option.id)}>
						<IconButton color="secondary" edge="end" aria-label="comments">
							<Delete/>
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	);
}
