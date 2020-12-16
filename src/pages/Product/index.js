import React, { useState, useEffect } from 'react';
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
                    <Link /*to={`/listProduto`}*/>Cadastro</Link>
                </h1>
                <h1>
                    <Link to={`/listProduto`}>Produtos</Link>
                </h1>
                <h1>
                    <Link /*to={`/listProduto`}*/>Sacola</Link>
                </h1>
            </div>
            <div id="meio">
                <h1 id="titulo1">Produtos</h1>
                <ul className="product-list">
                    {products.map(product => (
                        <li key={product.id}>
                            <strong>{product.name}</strong>
                            <p>Descrição do produto: {product.descricao}</p>
                            <p>Quantidade: {product.quantidade}</p>
                            <p>R$ {product.preco}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div id="rodape">
                <img src={rodape} />
            </div>
        </div>
    );
}