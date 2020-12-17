import React, { useState, useEffect } from 'react';
import paoFrances from "../../imagens/paoFrances.jpg";
import paozinhoDeliciaPaoDeQueijoBaiano from "../../imagens/paozinhoDeliciaPaoDeQueijoBaiano.jpg";
import paoDeAcucar from "../../imagens/paoDeAcucar.png";
import rodape from "../../imagens/rodape.jpg";
import { IoLogIn } from 'react-icons/io5';
import { RiShoppingBagFill } from 'react-icons/ri';
import api from '../../services/api';
import { Link } from "react-router-dom";
import './style.css';

export default function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data);
        })
    }, [])

    const [bags, setBags] = useState([]);
    useEffect(() => {
        api.get('bags').then(response => {
            setBags(response.data);
        })
    }, [])

    const listaProdutos = null;

    return (
        <div id="product-container">

            <div id="menu">
                <h1>
                    <Link to={`/cadastro`}>Cadastrar-se</Link>
                </h1>
                <h1>
                    <Link to={`/listProduto`}>Produtos</Link>
                </h1>
                <h1>
                    <Link to={`/sacola`}>Sacola <RiShoppingBagFill id="iconLog" /></Link>
                </h1>
                <h1>
                    <Link /* to={`/sacola`} */>Login <IoLogIn id="iconLog" /></Link>
                </h1>
            </div>
            <div id="meio">
                <div id="tituloMargens"><h1 id="titulo1">Sacola</h1></div>
                <div id="painel">
                    <h1>
                        {bags.map(bag => (
                            <h3 key={bag.id}>Nome da Sacola: {bag.descricao}</h3>
                        ))}
                    </h1>

                    <div>
                        {products.map(product => (
                            <p key={product.id}>
                                <strong>{product.name}</strong>
                                <p>Descrição do produto: {product.descricao}</p>
                                <p>Quantidade: {product.quantidade}</p>
                                <p>R$ {product.preco}</p>
                            </p>
                        ))}
                    </div>
                </div>
                {/* <ul className="product-list">
                    {products.map(product => (
                        <li key={product.id}>
                            <strong>{product.name}</strong>
                            <p>Descrição do produto: {product.descricao}</p>
                            <p>Quantidade: {product.quantidade}</p>
                            <p>R$ {product.preco}</p>
                        </li>
                    ))}
                </ul> */}
            </div>
            <div id="rodape">
                <img src={rodape} />
            </div>
        </div>
    );
}

{/* <table>
    <tr height="20px">
    </tr>
    <tr height="40%">
        <td > <img src={paoFrances} /> </td>
        <td > <img src={paozinhoDeliciaPaoDeQueijoBaiano} /> </td>
        <td > <img src={paoDeAcucar} /> </td>
    </tr>
    <tr height="40%">
        <td id="descricao"> <strong>Pão Frances</strong></td>
        <td id="descricao"> <strong>Pãozinho Delícia - Pão de Queijo Baiano</strong> </td>
        <td id="descricao"> <strong>Pão de Açúcar</strong> </td>
    </tr>
    <tr height="20px">
    </tr>

</table> */}