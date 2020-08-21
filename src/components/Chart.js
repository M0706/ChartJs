import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { Modal,Button } from 'react-bootstrap';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      show:false
    }
  }

    handleHide = () => {
      this.setState({ show: false });
    }

    zoom=()=>{
      this.setState({ show: true });
      alert("clicked")
    }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'left',
    location:'City'
  }


  render(){
    return (
      <div className="chart">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.zoom()}
        >
          ZOOM IN
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Contained Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            jsfdl
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Bar
          data={this.state.chartData}
          height={100}
          width={300}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+ this.props.location,
              fontSize:25,
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.chartData}
          height={100}
          width={300}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25,
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;