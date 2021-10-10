import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Draggable from "react-draggable";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


class ChartDate extends React.Component{
    constructor() {
        super ();
        this.state={
            'data':[]
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:  JSON.stringify({

                "dimension":"Product",
                "measures":["Cost"],
            })
        };
        fetch('https://plotter-task.herokuapp.com/data', requestOptions)
            .then(results => results.json())
            .then(results=>this.setState({'data':
                    results.map(function(column,index){
"measure":column.values,"dimension":column.values
                    })
            }));
    }
    render(){
        return (
            <ResponsiveContainer>
                <LineChart
                    data={this.state.data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="dimension"

                    />
                    <YAxis

                    >
                        <Label
                            angle={270}
                            position="left"
                            style={{
                                textAnchor: 'middle',
                            }}
                        >
                            Sales ($)
                        </Label>
                    </YAxis>
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="measures"
                        dot={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        );
    }
};



// Generate Sales Data
function createData(dimension, measures) {
  return { dimension, measures };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 2400),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', 3000),
];

export default function Chart() {
  const theme = useTheme();
console.log(data);
  return (
    <React.Fragment>
        <ChartDate />
    </React.Fragment>
  );
}
