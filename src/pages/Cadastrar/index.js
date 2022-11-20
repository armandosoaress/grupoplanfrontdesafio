import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, ConteudoForm, ConteudoTitulo, Titulo, BotaoAcao, ButtonInfo, AlertSuccess, AlertDanger, Form, Label, Input, ButtonSuccess } from './styles';

export const Cadastrar = () => {

  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    tensao: '',
    marca: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value });

  const cadProduto = async e => {
    e.preventDefault();
    //console.log(produto.nome);

    await fetch("https://www.armandosoares.com.br/grupoplan/api/produto", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ produto })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
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
          mensagem: 'Produto não cadastro com sucesso, tente mais tarde!'
        });
      });
  }

  return (
    <Container>
      <ConteudoForm>
        <ConteudoTitulo>
          <Titulo>Cadastrar</Titulo>
          <BotaoAcao>
            <Link to="/">
              <ButtonInfo>Eletrodomésticos</ButtonInfo>
            </Link>
          </BotaoAcao>
        </ConteudoTitulo>

        {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
        {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}

        <Form onSubmit={cadProduto}>
          <Label>Nome: </Label>
          <Input type="text" name="nome" placeholder="Nome do produto" onChange={valorInput} />

          <Label>Descrição: </Label>
          <Input type="text" name="descricao" placeholder="Descrição do produto" onChange={valorInput} />

          <Label>Tensão: </Label>
          <Input type="text" name="tensao" placeholder="Tensão do produto" onChange={valorInput} />

          <Label>Marca: </Label>
          <Input type="text" name="marca" placeholder="Marca do produto" onChange={valorInput} />

          <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>

        </Form>
      </ConteudoForm>
    </Container>
  );
}
