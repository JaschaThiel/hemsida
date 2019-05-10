import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from 'material-ui/colors/lightGreen';
import blue from 'material-ui/colors/blue';

const theme = createMuiTheme({
  palette: {
       primary: lightGreen,
       secondary: {
         main: '#1b5e20',
       },
     },
  typography: {
      useNextVariants: true,
    },
});

export default theme;
