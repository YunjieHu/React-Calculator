import React,{ Component } from 'react'

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            result:'',
            a:'',
            b:'',
            operation:''
        }

    }

    add=()=>{
      const res_val = Number(this.a.value)+Number(this.b.value);
      this.setState({
          result:res_val,
          a: this.a.value,
          b: this.b.value,
          operation:'+'
      })
      this.a.value='';
      this.b.value='';
    }

    subtract=()=>{
        const res_val = Number(this.a.value)-Number(this.b.value);
        this.setState({
            result:res_val,
            a: this.a.value,
            b: this.b.value,
            operation:'-'
        })
        this.a.value='';
        this.b.value='';
    }
    multiply=()=>{
        const res_val = Number(this.a.value)* Number(this.b.value);
        this.setState({
            result:res_val,
            a: this.a.value,
            b: this.b.value,
            operation:'*'
        })
        this.a.value='';
        this.b.value='';
    }
    divide=()=>{
        if (this.a.value === 0){
            this.setState({
                result:'Divide By Zero Error',
                a: this.a.value,
                b: this.b.value,
                operation:'/'
            })

        }else{
        const res_val = Number(this.a.value)/ Number(this.b.value);
        this.setState({
            result:res_val,
            a: this.a.value,
            b: this.b.value,
            operation:'/'
        })
        }
        this.a.value='';
        this.b.value='';
    }
    
    render(){
        const isOperating = this.state.operation && this.state.a && this.state.b && this.state.result;

        return(
            <div>
                <h1>Simple React Calculator</h1>
                <input ref ={node => this.a = node } ></input>
                <br/>
                <input ref ={node => this.b = node }></input>
                <br/>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
                <br/> Result:  {isOperating ? `${this.state.a} ${this.state.operation} ${this.state.b} = ` : ''}  {this.state.result}
            </div>

        )
    };

}

export default Calculator