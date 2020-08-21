import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Mumbai', 'Delhi', 'Hydrabad', 'Bangalore', 'Ahmedabad', 'Chennai'],
        datasets:[
          {
            label:'Population ',
            barThickness:70,
            hoverBackgroundColor:"red",
            pointBackgroundColor:"black",
            pointHoverBackgroundColor:"red",
            data:[
              12442373,
              11007835,
              6809970,
              8436675,
              5570585,
              4681087
            ],
            backgroundColor:[
              'rgba(255, 99, 0, 0.3)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        
        <Chart chartData={this.state.chartData} location="India" legendPosition="left"/>
      </div>
    );
  }
}

export default App;