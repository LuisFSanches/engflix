import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from '../../../components/Button'



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
  
  useEffect(()=>{
    console.log('alo alo')
    const URL = 'http://localhost:8080/categorias'

    fetch(URL)
    .then(async (respostaServidor)=>{
      const resposta = await respostaServidor.json()
      setCategorias([...resposta,])
    })

    /*setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          "id": 1,
          "nome": "Front End",
          "descricao": "Uma categoria show",
          "cor": "#cbd1ff"
        },
        {
          "id": 2,
          "nome": "Back End",
          "descricao": "Uma categoria show",
          "cor": "#cbd1ff"
        },
      ])
    }, 4*1000)*/

  }, [categorias])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form  onSubmit={handleSubmit}>

        <FormField
     
          label = "Nome:"
          type="text"
          value = {values.nome}
          name="nome"
          onChange={handleChange}
        />

          
        <FormField
       
          label = "Descricao:"
          type="textarea"
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



        <Button type="submit">Cadastrar</Button>
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
