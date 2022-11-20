import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, ConteudoTitulo, BotaoAcao, ButtonInfo, Titulo, ConteudoProd } from './styles';

export const Visualizar = (props) => {

    const [data, setData] = useState([]);

    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getProduto = async () => {
            await fetch("https://www.armandosoares.com.br/grupoplan/api/produto?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    setData(responseJson)
                });
        }
        getProduto();
    }, [id]);
    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>Visualizar</Titulo>
                <BotaoAcao>
                    <Link to="/">
                        <button class="button button--nanuk button--round-l button--text-thick button--inverted">
                            📓 <span>L</span><span>I</span><span>S</span><span>T</span><span>A</span><span>R</span>
                        </button>
                    </Link> <Link to="/">
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>
            <ConteudoProd>ID: {data.id}</ConteudoProd>
            <ConteudoProd>Nome: {data.nome}</ConteudoProd>
            <ConteudoProd>Descrição: {data.descricao}</ConteudoProd>
            <ConteudoProd>Tensão: {data.tensao}</ConteudoProd>
            <ConteudoProd>Marca: {data.marca}</ConteudoProd>

        </Container>
    );
}