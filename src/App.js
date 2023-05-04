import { Container, Content, Row } from "./style"; 
import Input from "./components/Input";
import Button  from "./components/Button";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumer] = useState('0');
  const [firstNumber, setFirstNumeber] = useState('0');
  const [operation, setOperation] = useState('');

//limpar o input
  const handleClear = () => {
    setCurrentNumer('0');
    setFirstNumeber('0');
    setOperation('');
  }

//Adicionar os números
  const handleAddNumber = (number) => {

    setCurrentNumer(prev => `${prev === '0' ? '' : prev}${number}`)
  }

//Somar os numeros
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumeber(String(currentNumber));
      setCurrentNumer('0');
      setOperation('+');
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumer(String(sum));
      setOperation('')
    }
  }

//Subtrair os numeros
  const handleSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumeber(String(currentNumber));
      setCurrentNumer('0');
      setOperation('-');
    }else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumer(String(sub));
      setOperation('')
    }
  }

//Multiplicar os numeros
 const handleMultNumbers = () => {
  if(firstNumber === '0'){
    setFirstNumeber(String(currentNumber));
    setCurrentNumer('0');
    setOperation('x');
  }else {
    const multi = Number(firstNumber) * Number(currentNumber);
    setCurrentNumer(String(multi));
    setOperation('')
  }
 }

//Dividir numeros

 const handleDivNumber = () => {
  if(firstNumber === '0'){
    setFirstNumeber(String(currentNumber));
    setCurrentNumer('0');
    setOperation('/');
  }else {
    const dividir = Number(firstNumber) / Number(currentNumber);
    setCurrentNumer(String(dividir));
    setOperation('')
  }
 }

//realizar a operação
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case 'x':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumber();
          break;
          default:
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
        <h1>Calculadora</h1>
        <Input value={currentNumber}/>
        <Row>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="/" onClick={handleDivNumber}/>
        <Button label="C" onClick={handleClear}/>
        <Button label="X" onClick={handleMultNumbers}/>
        </Row>
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={(handleSubNumbers)}/>
        </Row>
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
