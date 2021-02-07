import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		base: {
			margin: theme.spacing(1),
			display: 'block',
			
		},
	}),
)

export default useStyles;