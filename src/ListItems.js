import * as React from 'react';
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
class ChartColumns extends React.Component{
    componentDidMount() {
        this.getColumns();
    }
    getColumns(){
        fetch('https://plotter-task.herokuapp.com/columns').then(results => results.json()).then(results=>console.log(results));
    }
    render(){
        return null;
    }
}
export default function ListItems(){
    return (
        <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ChartColumns />
            <ListItemText primary="Dashboard" />
        </ListItem>
    </div>
    );
}
