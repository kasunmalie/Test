import React, { Component } from 'react';
//import { makeStyles,useStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NoteService from '../services/NoteService';
import { Button, TableFooter } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
//import { Search } from "@material-ui/icons";
//import PaginationComponent from './PaginationConponent'
import Checkbox from '@mui/material/Checkbox';
import CreateNoteComponent from './CreateNoteComponent';
//import {Button,Input,Popup} from './controls';
//import Controls from "./components/controls/Controls";
//import Controls from '.././components/controls/Controls';
//import { Typography } from '@material-ui/core';
import AddCircleRoundedIcon  from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';




class ListNoteComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      notes: [],
      seen:false

    };

    this.addNote = this.addNote.bind(this);

  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  }

  componentDidMount() {
    NoteService.getNotes().then((res) => {
      this.setState({ notes: res.data });
    });


  }


  addNote(){
    this.props.history.push('/add-note');
  }


  /*handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: items => {
            if (target.value == "")
                return items;
            else
                return items.filter(x => x.fullName.toLowerCase().includes(target.value))
        }
    })
}*/

  render() {
    //const classes = this.makeStyles();
    return (
      <div>
        <Toolbar>
          <div className="btn"  align="center" onClick={this.togglePop}>
           {/* <button>Add Note?</button>*/}
           
            <Button className="btn"  startIcon={<AddCircleRoundedIcon  />}  onClick={this.addNote}>Add Note</Button>
          </div>
          {this.state.seen ? < CreateNoteComponent toggle={this.togglePop} /> : null}

                    {/*<Button
            text="Add New"
            variant="outlined">
            <AddIcon onClick={setOpenPopup(true)}> </AddIcon>
                    </Button> */}
        </Toolbar>
        <TableContainer maxHeight="550" component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell>NID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>NOTE</TableCell>
                <TableCell>IMAGE</TableCell>
                <TableCell>CREATEDAT</TableCell>
                <TableCell>ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.notes.map((row) => (
                <TableRow key={row.nid}><Checkbox color="primary" />
                  <TableCell>
                    {row.nid}
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.note}</TableCell>
                  <TableCell>{row.image}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>
                    <Button className="btn"  startIcon={<UpdateIcon  />}  onClick={this.addNote}>Edit Note</Button>
                    </TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                </TableRow>
              ))}
              </TableBody>
            <TableFooter>
             {/* <TablePagination>

             </TablePagination>*/}
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default ListNoteComponent;