import React from 'react';
import ReactDOM from 'react-dom';
import GenerateRandom from './sorting/GenerateRandom';
import BubbleSort from './sorting/BubbleSort';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import {Progress} from 'reactstrap';
class App extends React.Component{
  state={
    arr:[]
  }
  setNumbers=()=>{
    var random=[];
    for (let index = 0; index < 15; index++) {
      const value=Math.floor(Math.random()*100)+1;
      
      random.push(value);
    }
    this.setState({
      arr:random
    })
  }
  render()
  {
    
   // console.log(this.state.arr);
    return(
      <BrowserRouter>
      <div className="container" style={{marginTop:'10px'}}>
        <div className="row">
          <div className="col-4 col-sm-4">
            <Link to="/GenerateRandom">
            <button className="btn btn-primary" onClick={this.setNumbers}>Generate numbers</button>
            </Link>
          </div>
          <div className="col-4 col-sm-4">
            <Link to="/BubbleSort">
            <button className="btn btn-primary">Bubble Sort</button>
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
            )}>

            </Route>
            </Switch>
          </div>
        </div>
      </div>
      </BrowserRouter>
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
