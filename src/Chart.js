import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import ChipsArray from "./DimensionField";

class ChartData extends React.Component{
    constructor() {
        super ();
        this.state={
            'data':[],
            'chips':ChipsArray,
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData(){
        console.log(this.state.chips);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:  JSON.stringify({

                "dimension":"Year",
                "measures":["Units sold"],
            })
        };
        fetch('https://plotter-task.herokuapp.com/data', requestOptions)
            .then(results => results.json())
            .then(results=>this.setState({'data':this.prepareData(results)}));
    }
    prepareData(data){
        let preparedData = [] ;
        for(let i = 0 ; i< data[0].values.length ; i++){
            preparedData.push({"dimension":data[0].values[i],"measures":data[1].values[i]})
        }
        console.log(preparedData);
        return preparedData;
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

export default function Chart() {
  return (
    <React.Fragment>
        <ChartData />
    </React.Fragment>
  );
}
