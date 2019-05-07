import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from 'material-ui/colors/lightGreen';
import red from 'material-ui/colors/pink';

import green from 'material-ui/colors/green';



const theme = createMuiTheme({
  palette: {
       primary: lightGreen,
       secondary: {
         main: '#1b5e20',
       }
     }
});

export default theme;
