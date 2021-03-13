import React from 'react';
import ReactDOM from 'react-dom';
import GenerateRandom from './sorting/GenerateRandom';
import BubbleSort from './sorting/BubbleSort';
import SelectionSort from './sorting/SelectionSort';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import {Button, Progress} from 'reactstrap';
import RangeSlider from 'react-bootstrap-range-slider';

class App extends React.Component{
  state={
    arr:[],
    size:10
  }
  setNumbers=()=>{
    var random=[];
    var size=this.state.size;
    for (let index = 0; index <size; index++) {  // 15 to size
      const value=Math.floor(Math.random()*100)+1;
      
      random.push(value);
    }
    this.setState({
      arr:random
    })
  }
  sizeChange=(val)=>{
  // console.log(val);
   this.setState({
     size:val
   })
  }
  render()
  {
    
   // console.log(this.state.arr);
    return(
      <>
   

      <BrowserRouter>
      <div className="container" style={{marginTop:'10px'}}>

        <div className="row">
          <div className="col-12 col-sm-12" >
            <h2 className="text-center" style={{fontFamily:'cursive', fontSize:'50px'}}>Sorting Visualizer</h2>
            </div>
        </div>
        <div className="row" style={{marginTop:'40px '}}>
          <div className="col-3 col-sm-3">
          <h6>Array Size</h6> {' '}
            <RangeSlider value={this.state.size} onChange={(e)=>this.sizeChange(e.target.value)}
            min={0} max={30} step={5} 
            ></RangeSlider>

            
{/*           <Button type="button " variant="primary" onClick={e=>this.sizeChange(e.target.value)}  value="5">5 </Button>{' '}
      <Button type="button" variant="primary" onClick={e=>this.sizeChange(e.target.value)}  value="10">10</Button> {' '}
      <Button type="button" variant="primary" onClick={e=>this.sizeChange(e.target.value)}  value="15">15</Button>{' '}
      <Button type="button"  variant="primary" onClick={e=>this.sizeChange(e.target.value)}  value="20">20</Button>{' '} */}
          </div>
          <div className="col-3 col-sm-3">
            <Link to="/GenerateRandom">
            <button className="btn btn-primary"  onClick={this.setNumbers}>Generate numbers</button>
            </Link>
          </div>
          <div className="col-3 col-sm-3">
            <Link to="/BubbleSort">
            <button className="btn btn-warning">Bubble Sort</button>
            </Link>
          </div>
          <div className="col-3 col-sm-3">
            <Link to="/SelectionSort">
            <button className="btn btn-danger">Selection Sort</button>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-10 col-sm-10">
            <Switch>
            <Route exact path="/GenerateRandom" render={(props)=>(
              <GenerateRandom {...props} array={this.state.arr}/>
            )} ></Route>

            <Route exact path="/BubbleSort" render={(props)=>(
              <BubbleSort {...props} array={this.state.arr}/>
            )}></Route>
               <Route exact path="/SelectionSort" render={(props)=>(
              <SelectionSort {...props} array={this.state.arr}/>
            )}></Route>

            
            </Switch>
          </div>
        </div>
      </div>
      </BrowserRouter>
      </>
    /*   <div className="row">
        <div className="col-12 col-sm-12">
          <div className="row">
            <div className="col-4 col-sm-4">
          <button className="btn btn-primary" onClick={this.setNumbers}>Generate numbers</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12">

               <br/>
              {
                this.state.arr.map((val,index)=>{
                  return(
                    <div className="row" key={index}>
                      <div className="col-8 col-sm-8">
                        <Progress value={val} />
                      </div>
                      <div className="col-4 col-sm-4">{val}</div>
                      </div>        
                  );
                })
              } 
            </div>
          </div>
        </div>
      </div> */
    );
  }
}

export default App;
