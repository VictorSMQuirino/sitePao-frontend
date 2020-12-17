import React, { useState, useEffect } from 'react';
import { FaBeer } from 'react-icons/fa';    
import { IoLogIn } from 'react-icons/io5';
import { RiShoppingBagFill } from 'react-icons/ri';
import rodape from "../../imagens/rodape.jpg";
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
                    <Link /*to={`/listProduto`}*/>Sacola <RiShoppingBagFill id="iconLog" /></Link>
                </h1>
                <h1>
                    <Link /*to={`/listProduto`}*/>Login <IoLogIn id="iconLog" /></Link>
                </h1>
            </div>
            <div id="meio">
                <h1 id="titulo1">Produtos</h1>
                <ul className="product-list">
                    {products.map(product => (
                        <li id="cadaLi" key={product.id}>
                            <img id="imgProdutos" src={product.linkImg} ></img>
                            <strong>{product.name}</strong>
                            <p>Descrição do produto: {product.descricao}</p>
                            <p>Quantidade: {product.quantidade}</p>
                            <p>R$ {product.preco}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <img src={require('./../../imagens/paoFrances.jpg')} /> */}

            {/* <img src={process.env.PUBLIC_URL + './imagens/paoFrances.jpg'} /> */}

            <div id="rodape">
                <img src={rodape} />
            </div>
        </div>
    );
}