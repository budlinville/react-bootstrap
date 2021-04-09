import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const ReplaceMe = () => {
	const classes = useStyles();

	return (
		<div className={classes.rootContainer}>
			<Typography className={classes.label}>
				Go to src/components/pages/ReplaceMe.js to replace me!
			</Typography>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.palette.background.default
	},
	label: {
		color: theme.palette.text.primary
	}
}));

export default ReplaceMe;