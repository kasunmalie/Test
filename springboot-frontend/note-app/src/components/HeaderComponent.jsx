import React, { Component } from 'react';
import { AppBar, Toolbar, Grid, InputBase, IconButton } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SearchIcon from '@material-ui/icons/Search';
import { Tooltip} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
//import BackHandler from 'react-native';


class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        
        this.state = {

        }
        this.addNote=this.addNote.bind(this);

    }

    /* componentWillMount() {
         BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
       }
       componentWillUnmount() {
         BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
       }
       handleBackButtonClick() {
         BackHandler.exitApp();
         return true;
       }*/

    

    handleExit(event) {
        alert('App Will Be closed');
        //BackHandler.exitApp();
       // window.close();
    };

    addNote(){
         this.props.history.push('/add-note');
      }
    
    render() {

        return (
            <div>
                <h1 align="center">Note Management App</h1>

                <AppBar position="static">
                    <Toolbar>
                        <Grid container
                            alignItems="center">
                                 <Grid item>
                                <IconButton>
                                 <AddCircleRoundedIcon fontSize="small" label="AddNote" onClick={this.addNote} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <InputBase
                                    placeholder="Search topics"
                                    //className={classes.searchInput}
                                    startAdornment={<SearchIcon fontSize="small" />}
                                />
                            </Grid>
                            <Grid item sm></Grid>
                            
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            
                                <Tooltip title="Filter list">
                                    <IconButton>
                                        <FilterListIcon />
                                    </IconButton>
                                </Tooltip>
                        
                           
                            <Grid item>
                            <Tooltip title="Exit">
                                <IconButton>
                                    <PowerSettingsNewIcon fontSize="small" label="ExitWindow" onClick={this.handleExit} />
                                </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default HeaderComponent;