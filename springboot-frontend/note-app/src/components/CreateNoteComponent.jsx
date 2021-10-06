import React, { Component } from 'react';

import { Button, Card, Container, CardContent, Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { TextField} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { withRouter } from 'react-router';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CloseIcon from '@mui/icons-material/Close';

class CreateNoteComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            note: '',
            image: '',
            createdAt: '',
            seen:true,
            //error
            //visible : false
        };

       this.changeHandlerTitle = this.changeHandlerTitle.bind(this);
       this.changeHandlerNote = this.changeHandlerNote.bind(this);
       this.changeHandlerCreatedAt = this.changeHandlerCreatedAt.bind(this);
       this.changeImageHandler = this.changeImageHandler.bind(this);
       this.saveNote = this.saveNote.bind(this);

    }

    handleClick = () => {
       // this.props.toggle();
        this.props.history.push('/notes');
      };

    handleSubmit = e => {
        e.preventDefault();
       // noteData = {title,note,image,createdAt}
       let noteData = {title: this.state.title,note: this.state.note,createdAt: this.state.createdAt, image: this.state.image };
        fetch("http://localhost:8080/api/create",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(noteData)
             
        }).then(()=>{
           console.log("New Note Added!")
        })


    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
   
    changeHandlerTitle =  (event)=> {
        this.setState({ title: event.target.value })
    }
    changeHandlerNote = (event) => {
        this.setState({ note: event.target.value })
    }
    changeHandlerCreatedAt = (event) => {
        this.setState({ createdAt: event.target.value })
    }

    changeImageHandler = (event) => {
        this.setState({ image: event.target.value })
    }

    saveNote = (e) => {
        e.preventDefault();
        let note = {title: this.state.title,note: this.state.note,createdAt: this.state.createdAt, image: this.state.image };
        console.log('note = > ' + JSON.stringify(note));
    }

    /*componentDidMount() {
        NoteService.create.then((res) => {
          this.setState({ notes: res.data });
        });
    }*/
    
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }

    reset(){
        this.props.history.push('/notes');
    }

    /*cancel(){
        this.setState({
            visible : false
        });
       // this.props.cancel;
       // this.props.history.push('/notes');
    }*/

    render() {
        return (
            <div className="modal">
                <div className="modal_content">
                    <Button className="close" startIcon={<CloseIcon/>} onClick={this.handleClick}>
                      { /* &times;*/}
                    </Button>
                    <Card>
                    <h1 align="center">Note Form</h1>
                        <CardContent align="center">
                            <Container maxWidth="xl" /*style={{ backgroundColor: "pink" }}*/>
                                <FormControl onSubmit={this.handleSubmit}>
                                    <Grid Container spacing={1}>
                                        <Grid Item xs={12}>
                                            < TextField label="Title" name="title" placeholder="Enter Note Title" variant="outlined" fullWidth="required" value={this.state.title} onChange={this.changeHandlerTitle} />
                                        </Grid>
                                        <Grid Item xs={12}>
                                            < TextField label="Date" name="createdAt" type="date" variant="outlined" fullWidth="required" value={this.state.createdAt} onChange={this.changeHandlerCreatedAt} />
                                        </Grid>
                                        <Grid Item xs={12}>
                                            < TextField label="Note" name="note" placeholder="Enter Note" multiline rows={4} variant="outlined" fullWidth="required" value={this.state.note} onChange={this.changeHandlerNote} />
                                        </Grid>
                                        <Grid Item xs={12}>

                                            < TextField input type="file" name="image" accept="image/*" onChange={this.changeImageHandler} variant="outlined" fullWidth="optional" value={this.state.image} />
                                        </Grid>
                                            <Button type="submit" onClick={this.saveNote} startIcon={<SaveIcon />} variant="contained" color="primary" >Save</Button>{''}&nbsp;
                                            <Button startIcon={<ClearAllIcon />} variant="contained" OnClick={this.reset} color="primary" margin-left="20px">Clear All</Button>
                                        
                                    </Grid>

                                </FormControl>
                            </Container>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateNoteComponent);