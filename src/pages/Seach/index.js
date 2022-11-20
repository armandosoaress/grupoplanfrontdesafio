import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";

import { Container, ConteudoTitulo, BotaoAcao, ButtonSuccess, Table, Titulo, ButtonPrimary, ButtonWarning, ButtonDanger, AlertSuccess, AlertDanger, page, Page } from './styles';


export const Seach = () => {

  const [data, setData] = useState([]);
  const [totpage, setTotpage] = useState([]);


  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const [Seach, setSeach] = useState({
    Seach: '',
  });

  localStorage.setItem('seach', Seach.Seach);

  const ValueSeach = (e) => {
    setSeach({
      ...Seach, [e.target.name]: e.target.value
    })

    setTimeout(function () {
      console.log(Seach.Seach);
      getProdutospage(localStorage.getItem("seach"));
    }, 600);

  }

  const getProdutospage = (page) => {
    console.log(page);
    fetch("https://www.armandosoares.com.br/grupoplan/api/produtos/s?titulo=" + page)
      .then((response) => response.json())
      .then((responseJson) => (
        teste44(responseJson.Produtos)
      )
      );
  }





  function teste44(params) {
    if (params == 204) {
      console.log("nehum econtrado")
      setData([
        { nome: 'Nenhum registro encontrado' }
      ])
      var b = document.getElementById("b")
      b.style.display = "none"
    } else {
      setData(params)
    }

  }




  function teste2(x) {

    if (x == localStorage.getItem('ultima')) {
      var botao2 = document.getElementById("proxima")
      botao2.style.display = "none"
    } else {
      var botao2 = document.getElementById("proxima")
      botao2.style.display = "inline"
    }
  }

  const apagarProduto = async (idProduto) => {
    //console.log(idProduto);
    await fetch("https://www.armandosoares.com.br/grupoplan/api/produto?id=" + idProduto, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.erro) {
          setStatus({
            type: 'erro',
            mensagem: responseJson.status
          });
        } else {
          setStatus({
            type: 'success',
            mensagem: responseJson.status
          });

        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: "Erro: Produto não apagado com sucesso, tente mais tarde"
        });
      });
  };



  useEffect(() => {

  }, [])


  const Ages2 = () => {
    var teste = [];
    for (let index = 1; index <= totpage; index++) {

      if (index == localStorage.getItem("atual")) {
        teste.push(<a onClick={() => getProdutospage("https://www.armandosoares.com.br/grupoplan/api/produtos?page=" + index)} class='active' href='#'>{index}</a>);
      } else {
        teste.push(<a onClick={() => getProdutospage("https://www.armandosoares.com.br/grupoplan/api/produtos?page=" + index)} href='#'>{index}</a>);
      }

    }
    return teste
  };
  var cont = 1;
  return (
    <Container>
      {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
      {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}


      <div class="grid-container">
        <div>

         

          <div class="webflow-style-input">
            <input class="" name='Seach' onChange={ValueSeach} placeholder="🔎 Pesquisar"></input>
          </div>

        </div>

      </div>

      <div className='tt'>
        <table>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Tensão</th>
            <th>Marca</th>
          </tr>
          <tbody>
            {Object.values(data).map(produto => (
              console.log(produto),
              <><tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.tensao}</td>
                <td>{produto.marca}</td>
                <td>
                  <ul id='b'>
                    <li><Link to={"/visualizar/" + produto.id}>
                      <button class="button button--moema button--inverted button--text-thick button--size-s">
                        <span>V</span><span>i</span><span>z</span><span>u</span><span>a</span><span>l</span><span>i</span><span>z</span><span>a</span><span>r</span>
                      </button>
                    </Link>{" "}</li>
                    <li> <Link to={"/editar/" + produto.id}>
                      <button class=" editar button button--moema button--inverted button--text-thick button--size-s">
                        <span>E</span><span>d</span><span>i</span><span>t</span><span>a</span><span>r</span>
                      </button>
                    </Link>{" "}</li>
                    <li><button onClick={() => apagarProduto(produto.id)} class="deletar button button--moema button--inverted button--text-thick button--size-s">
                      <span>D</span><span>e</span><span>l</span><span>e</span><span>t</span><span>a</span><span>r</span>
                    </button></li>
                  </ul>
                </td>
              </tr>
                <br></br>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div class="grid-container">
        <div>
          <Link to="/cadastrar">
            <button class="button button--nanuk button--round-l button--text-thick button--inverted">
              ➕ <span>C</span><span>A</span><span>D</span><span>A</span><span>S</span><span>T</span><span>R</span><span>A</span><span>R</span>
            </button>
          </Link>
          <Link to="/">
            <button class="button button--nanuk button--round-l button--text-thick button--inverted">
            📓 <span>L</span><span>I</span><span>S</span><span>T</span><span>A</span><span>R</span>
            </button>
          </Link>
        </div>
      </div>
      <center>
        <Page>
          <a id='anterior' onClick={() => getProdutospage(localStorage.getItem("anterior"))} href="#">&laquo;</a>
          <Ages2>
          </Ages2>
          <a id='proxima' onClick={() => getProdutospage(localStorage.getItem("proxima"))} href="#">&raquo;</a>
        </Page>
      </center>
    </Container>
  );
}

