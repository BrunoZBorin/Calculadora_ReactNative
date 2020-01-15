import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'
 const estadoInicial={
   values:[0,0],
   displayValue:'0',
   operation:null,
   clearDisplay:false,
   current:0
 }
export default class App extends Component{
  state={...estadoInicial }

  addDigit = n =>{
  if (n==='.'&& this.state.displayValue.includes('.')){
    return
  }
  const clearDisplay = this.state.displayValue ==='0'||
  this.state.clearDisplay
  const currentValue = clearDisplay ? '': this.state.displayValue
  const displayValue = currentValue + n
  this.setState({displayValue, clearDisplay:false})
  if(n!='.'){
    const newValue = parseFloat(displayValue)
    const values = [...this.state.values]
    values[this.state.current] = newValue
    this.setState({values}) 
  }
}
clearMemory = () =>{
  this.setState({...estadoInicial})
}  
setOperation = operation =>{
  if(this.state.current===0){
    this.setState({operation, current:1, clearDisplay:true })
  }else{
    const equals = operation === '='
    const values = [...this.state.values]
    try{
      values[0] =
      eval (` ${values[0]}  ${this.state.operation} ${values[1]}`)
    }catch(e){
      values[0]=this.state.values[0]
    }
    values[1]=0
    this.setState({
      displayValue:  `${values[0]}`,
      operation: equals ? null : operation,
      current: equals ? 0 : 1,
      clearDisplay: !equals,
      values
    })
  }
}

  render(){
    const digito= [1,2]
    const opert = '+'
    const result = eval(`${digito[0]}  ${opert}  ${digito[1]}`)
    return (
      <View>
        <Display value={this.state.displayValue}/>
         <View style={{flexDirection:'column'}}> 
            <Button label='AC' clear onClick={this.clearMemory} />
            <View style={{flexDirection:'row'}}>
              <Button label='/' operation onClick={()=>this.setOperation('/')}/>
              <Button label='7' onClick={()=>this.addDigit(7)}/>
              <Button label='8' onClick={()=>this.addDigit(8)}/>
              <Button label='9' onClick={()=>this.addDigit(9)}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <Button label='*' operation onClick={()=>this.setOperation('*')}/>
              <Button label='4' onClick={()=>this.addDigit(4)}/>
              <Button label='5' onClick={()=>this.addDigit(5)}/>
              <Button label='6' onClick={()=>this.addDigit(6)}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <Button label='-' operation onClick={()=>this.setOperation('-')}/>
              <Button label='1' onClick={()=>this.addDigit(1)}/>
              <Button label='2' onClick={()=>this.addDigit(2)}/>
              <Button label='3' onClick={()=>this.addDigit(3)}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <Button label='+' operation onClick={()=>this.setOperation('+')}/>
              <Button label='0' onClick={()=>this.addDigit(0)}/>
              <Button label='.' onClick={()=>this.addDigit('.')}/>
              <Button label='=' operation onClick={()=>this.setOperation('=')}/>
            </View>
          </View>
          <View>
    
          </View>
      </View>
    )
  }
}
