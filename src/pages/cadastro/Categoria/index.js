import React, {useState} from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";



function CadastroCategoria() {

  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:''
  }

  const [categorias, setCategorias] = useState([])

  const [values, setValues] = useState(valoresIniciais)

    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]:valor
      })
    }
  function handleChange(e){
    setValue(e.target.getAttribute('name'),e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    setCategorias ([...categorias, values])
    setValues(valoresIniciais)
    
  }
 
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form  onSubmit={handleSubmit}>

        <FormField
          tag = "1"
          label = "Nome:"
          type="text"
          value = {values.nome}
          name="nome"
          onChange={handleChange}
        />

          
        <FormField
          tag = "2"
          label = "Descricao:"
          type="text"
          value = {values.descricao}
          name="descricao"
          onChange={handleChange}
        />
        
          
        <FormField
          tag = "1"
          label = "Cor:"
          type="color"
          value = {values.cor}
          name="cor"
          onChange={handleChange}
        />



        <button type="submit">Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, indice)=>{
          return (
            <>
            <li key={`${categoria[indice]}`}>
              {categoria.nome}
          
            </li>
        
            </>
          )
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
