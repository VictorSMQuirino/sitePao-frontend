import React, { useState, useEffect } from 'react';
import { FaBeer } from 'react-icons/fa';
import { IoLogIn } from 'react-icons/io5';
import { RiShoppingBagFill } from 'react-icons/ri';
import rodape from "../../imagens/rodape.jpg";
import api from '../../services/api';
import { Link,  useHistory, useParams } from "react-router-dom";
import './style.css';

export default function Product() {

    const history = useHistory();

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
                    <Link to={`/sacola`}>Sacola <RiShoppingBagFill id="iconLog" /></Link>
                </h1>
                <h1>
                    <Link /*to={`/listProduto`}*/>Login <IoLogIn id="iconLog" /></Link>
                </h1>
            </div>
            <div id="meio">
            <div id="tituloMargens"><h1 id="titulo1">Produtos</h1></div> {/* id desta div esta no css de sacola */}
                <div id="painel2">
                    <ul className="product-list2">
                        {products.map(product => (
                            <li id="cadaLi" key={product.id}>
                                <img id="imgProdutos2" src={product.linkImg} ></img>
                                <strong>{product.name}</strong>
                                <p>Descrição do produto: {product.descricao}</p>
                                <p>Quantidade: {product.quantidade}</p>
                                <p>R$ {product.preco}</p>
                                <Link className="buttonAdd" onClick={() => history.push('/')}>Adicionar a Sacola</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <img src={require('./../../imagens/paoFrances.jpg')} /> */}

            {/* <img src={process.env.PUBLIC_URL + './imagens/paoFrances.jpg'} /> */}

            <div id="rodape">
                <img src={rodape} />
            </div>
        </div>
    );
}