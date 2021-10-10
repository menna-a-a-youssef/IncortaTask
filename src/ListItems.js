import * as React from 'react';
import ReactDOM from 'react-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Draggable from "react-draggable";
class ChartColumns extends React.Component{
    constructor() {
        super ();
        this.state={
            'columns':[]
        }
    }
    componentDidMount() {
        this.getColumns();
    }
    getColumns(){
        fetch('https://plotter-task.herokuapp.com/columns')
            .then(results => results.json())
            .then(results=>this.setState({'columns':results}));
    }
    handleStart(){
    }
    handleStop(){
    }
    render(){
        return (
            <div>
                {this.state.columns.map(function(column,index){
                    return (
                        <Draggable
                            handle=".handle"
                            defaultPosition={{x: 0, y: 0}}
                            // onStart={this.handleStart}
                            // onDrag={this.handleDrag}
                            // onStop={this.handleStop}
                        >
                            <ListItem  className="handle" key={index} button sx={{
                                pl:3,

                                overflow: 'visible',}}>
                                <ListItemText primary={column.name} />
                            </ListItem>
                        </Draggable>
                    )
                })}


            </div>
        );
    }
};
export default function ListItems(){
    return (
            <ChartColumns />
    );
}
