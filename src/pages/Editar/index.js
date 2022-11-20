import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, ConteudoForm, ConteudoTitulo, Titulo, BotaoAcao, ButtonInfo, AlertSuccess, AlertDanger, Form, Label, Input, ButtonWarning } from './styles';

export const Editar = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tensao, setTensao] = useState('');
    const [marca, setMarca] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    const editProduto = async e => {
        e.preventDefault();
        await fetch("https://www.armandosoares.com.br/grupoplan/api/produto", {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, nome, descricao,tensao,marca })
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.status);
                if (responseJson.erro) {
                    setStatus({
                        type: 'erro',
                        mensagem: "erro"
                    });
                } else {
                    setStatus({
                        type: 'success',
                        mensagem: "Eletronico editado com sucesso"
                    });
                }
            }).catch(() => {
                setStatus({
                    type: 'erro',
                    mensagem: "Produto não editado com sucesso, tente mais tarde!"
                });
            });
    }

    useEffect(() => {
        const getProduto = async () => {
            await fetch("https://www.armandosoares.com.br/grupoplan/api/produto?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    setNome(responseJson.nome);
                    setDescricao(responseJson.descricao);
                    setTensao(responseJson.tensao);
                    setMarca(responseJson.marca);
                });
        }
        getProduto();
    }, [id]);

    return (
        <Container>
            <ConteudoForm>
                <ConteudoTitulo>
                    <Titulo>Editar</Titulo>
                    <BotaoAcao>
                    <Link to="/">
            <button class="button button--nanuk button--round-l button--text-thick button--inverted">
            📓 <span>L</span><span>I</span><span>S</span><span>T</span><span>A</span><span>R</span>
            </button>
          </Link>
                    </BotaoAcao>
                </ConteudoTitulo>

                {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
                {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}


                <Form onSubmit={editProduto}>
                    <Label>Nome: </Label>
                    <Input type="text" name="nome" placeholder="Título do produto" value={nome} onChange={e => setNome(e.target.value)} />

                    <Label>Descrição: </Label>
                    <Input type="text" name="descricao" placeholder="Descrição do produto" value={descricao} onChange={e => setDescricao(e.target.value)} />

                    <Label>Tensão: </Label>
                    <Input type="text" name="tensao" placeholder="Tensão do produto" value={tensao} onChange={e => setTensao(e.target.value)} />

                    <Label>Marca: </Label>
                    <Input type="text" name="marca" placeholder="Marca do produto" value={marca} onChange={e => setMarca(e.target.value)} />

                    <ButtonWarning className='botaoeditar' type="submit">Editar</ButtonWarning>
                </Form>

            </ConteudoForm>
        </Container>
    );
}