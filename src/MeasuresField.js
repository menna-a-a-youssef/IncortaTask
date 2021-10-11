import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));
export default function ChipsArray() {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Units sold' },
    ]);
    console.log(chipData[0].label)

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    function handleOnDragEnd(result) {
        if (!result.destination) return;

        console.log(result);
    }
    return (
        <Paper
             sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            flexWrap: 'no-wrap',
            listStyle: 'none',
            p: 2,
            m: 0,
            mb:3,

        }}
               component="div"
        >

            Measures
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="measureChips" direction="horizontal" >
                    {(provided) => (
        <Paper
            className="measureChips" {...provided.droppableProps} ref={provided.innerRef}
            elevation={0}
            variant="outlined"
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                listStyle: 'none',
                flex:1,
                p: 0.5,
                m: 0,
                ml:2,

            }}
            component="ul"
        >

            {chipData.map((data) => {

                return (
                    <Draggable key={data.key} draggableId={data.label} index={data.key}>
                        {(provided) => (
                    <ListItem
                        ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    >
                        <Chip
                            label={data.label}
                            onDelete={handleDelete(data)}
                        />
                    </ListItem>
                        )}
                    </Draggable>

                );

            })}
            {provided.placeholder}
        </Paper>
                    )}
                </Droppable>
            </DragDropContext>
        </Paper>
    );
}
