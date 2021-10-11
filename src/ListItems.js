import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { DragDropContext,Droppable ,Draggable  } from 'react-beautiful-dnd';


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

    render(){
        function handleOnDragEnd(result) {
            if (!result.destination) return;

           console.log(result);
        }
        return (
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="columns">
                    {(provided) => (
            <div className="columns" {...provided.droppableProps} ref={provided.innerRef}>
                {this.state.columns.map(function(column,index){
                    return (
                        <Draggable key={index} draggableId={column.name} index={index}>
                            {(provided) => (
                            <ListItem
                                ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                sx={{
                                pl:3,

                                overflow: 'visible',}}>
                                <ListItemText primary={column.name} />
                            </ListItem>
                                )}
                        </Draggable>
                    )
                })}

                {provided.placeholder}
            </div>

                        )}
                </Droppable>
            </DragDropContext>
        );
    }
};
export default function ListItems(){

    return (
            <ChartColumns />
    );
}
