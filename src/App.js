import React from 'react';
import {Progress} from 'reactstrap';
class App extends React.Component{
  state={
    arr:[]
  }
  setNumbers=()=>{
    var random=[];
    for (let index = 0; index < 10; index++) {
      const value=Math.floor(Math.random()*100)+1;
      
      random.push(value);
    }
    this.setState({
      arr:random
    })
  }
  render()
  {
    
    //console.log(this.state.arr);
    return(
      <div className="row">
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
      </div>
    );
  }
}

export default App;
