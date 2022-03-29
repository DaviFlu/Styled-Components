import React, {Component} from 'react'
import styled from "styled-components"

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:100%;
  
`
const Titulo = styled.div`
  margin-bottom:5vh;
  margin-top:5vh;
  padding:50px;
  border: 5px dashed rgb(15, 1, 206);
  border-radius:25%;
  background-color:rgb(69, 149, 185);
`
const Lista = styled.div`
  border:2px solid purple;
  border-radius:20%;
  background-color:rgb(100, 216, 197);
  margin-top:3vh;
  font-weight:bold;
`

const Botao = styled.div`
  margin-top:3vh;
`
class Todo extends Component{

  state={
    tarefa:"",
    lista: []
  }

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    })
  }

    add = () => {
      let {lista, tarefa} = this.state
      if (tarefa != ""){
        this.setState({
            tarefa:'',
            lista: lista.concat({
            tarefa: tarefa,
            id: Date.now()
          })
        })
      }
    }

  remover = (id) => {
    let {lista, tarefa} = this.state
    this.setState({
      lista: lista.filter((item) => {
        return item.id != id
      })
    })
  }

  render(){
    return(
      <Container>
        <Titulo>
          <h1>React App To Do List</h1>
        </Titulo>
        <input onChange={this.handleChange} type="text" value={this.state.tarefa}/>
        <Botao>
        <button onClick={this.add}>Adicionar</button>
        </Botao>
        <div>
          {this.state.lista.map((item) => (
            <Lista>
              <ul>
                <li>{item.tarefa} <button onClick={() => {this.remover(item.id)}}>⌫</button> </li>
              </ul>
            </Lista>
          ))}
        </div>
      </Container>
    )
  }

}

export default Todo