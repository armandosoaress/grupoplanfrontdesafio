import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
    padding: 0px 20px 20px;
`;

export const ConteudoTitulo = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const BotaoAcao = styled.section`
    margin: 25px 0px;
`;

export const ButtonSuccess = styled.button`
width: 130px;
height: 40px;
color: #fff;
border-radius: 5px;
padding: 10px 25px;
font-family: 'Lato', sans-serif;
font-weight: 500;
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
display: inline-block;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;

border: none;
transition: all 0.3s ease;
overflow: hidden;

:after {
    position: absolute;
    content: " ";
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     background-color: #f5811d;
  background-image: linear-gradient(515deg, #242424 70%, #f5811d 4%);
    transition: all 0.3s ease;
  }

  hover {
    background: transparent;
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
      inset -4px -4px 6px 0 rgba(255,255,255,.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
    color: #fff;
  }

  :hover:after {
    -webkit-transform: scale(2) rotate(180deg);
    transform: scale(2) rotate(180deg);
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
      inset -4px -4px 6px 0 rgba(255,255,255,.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  }
    
`;

export const ButtonPrimary = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 5px 8px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #0d6efd;
        color: #fff;
    }
`;

export const ButtonWarning = styled.button`
    background-color: #fff;
    color: #ffc107;
    padding: 5px 8px;
    border: 1px solid #ffc107;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #ffc107;
        color: #fff;
    }
`;

export const ButtonDanger = styled.button`
    background-color: #fff;
    color: #dc3545;
    padding: 5px 8px;
    border: 1px solid #dc3545;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #dc3545;
        color: #fff;
    }
`;

export const Page = styled.div`
    display: inline-block;
    margin-top:12px;
a {
    color: black;
    background-color: white;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }
 a.active {
    background-color: #4CAF50;
    color: white;
  }
  a:hover:not(.active) {background-color: #ddd;}

`;

export const AlertSuccess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 20px 0;
    border: 1px solid #badbcc;
    border-radius: 4px;
    padding: 7px;
`;

export const AlertDanger = styled.p`
    background-color: #f8d7da;
    color: #842029;
    margin: 20px 0;
    border: 1px solid #f5c2c7;
    border-radius: 4px;
    padding: 7px;
`;

export const Titulo = styled.h1`
    color: #3e3e3e;
    font-size: 23px;
`;

export const Table = styled.table`

   
`;