'use client';

import { useState } from 'react';  
import Pagina from "@/components/Pagina";
import { Button, Form } from "react-bootstrap";
import { FaExchangeAlt, FaTrash } from "react-icons/fa";

const imagensMoedas = {
  USD: '/img/dollar.png',    // Caminho do dólar
  EUR: '/img/euro.png',      // Caminho do euro
  BTC: '/img/bitcoin.png'    // Caminho do bitcoin
};

export default function ConversorMoedaPage() {
  const [valor, setValor] = useState('0');
  const [moedaDestino, setMoedaDestino] = useState('');
  const [resultado, setResultado] = useState(null);

  function converter(event) {
    event.preventDefault();

    // Valores fixos para conversão
    const taxasConversao = {
      USD: 0.20, // 1 real = 0.20 dólares
      EUR: 0.18, // 1 real = 0.18 euros
      BTC: 0.000003 // 1 real = 0.000003 bitcoins
    };

    // Calcular o valor convertido com base na moeda selecionada
    const valorConvertido = parseFloat(valor) * (taxasConversao[moedaDestino] || 0);

    // Exibir o resultado com 2 casas decimais para USD e EUR, e 6 para BTC
    const resultadoFormatado = moedaDestino === 'BTC' 
      ? valorConvertido.toFixed(6) 
      : valorConvertido.toFixed(2);

    setResultado(resultadoFormatado);
    console.log({ valor, moedaDestino, valorConvertido });
  }

  function limpar() {
    setValor('0');
    setMoedaDestino('');
    setResultado(null);
  }

  return (
    <Pagina titulo="Conversor de Moeda">

      {/* Exibe a imagem da moeda correspondente acima do formulário */}
      {moedaDestino && imagensMoedas[moedaDestino] && (
        <div className="text-center mb-3">
          <img 
            src={imagensMoedas[moedaDestino]} 
            alt={`Ícone da moeda ${moedaDestino}`}
            style={{ 
              width: '200px', // Ajuste o tamanho conforme necessário
              height: 'auto',
              display: 'block',
              left: '10px', // Posiciona a imagem no canto esquerdo
            }} 
          />
        </div>
      )}

      {/* Formulário */}
      <Form onSubmit={converter}>
        <Form.Group className="mb-3">
          <Form.Label>Valor em Reais (BRL):</Form.Label>
          <Form.Control
            type="number"
            name="valor"
            value={valor}
            onChange={e => setValor(e.target.value)}
            min={0.01}
            step={0.01}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Moeda de Destino:</Form.Label>
          <Form.Select
            name="moedaDestino"
            value={moedaDestino}
            onChange={e => setMoedaDestino(e.target.value)}
          >
            <option>Selecione</option>
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="BTC">Bitcoin (BTC)</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 text-center">
          <Button type="submit" variant="primary">
            <FaExchangeAlt /> Converter
          </Button>
          <Button type="button" variant="danger" className="ms-2" onClick={limpar}>
            <FaTrash /> Limpar
          </Button>
        </Form.Group>
      </Form>

      {/* Exibe o resultado */}
      {resultado !== null && moedaDestino && (
        <div className="mt-4 text-center">
          <h4>Resultado: {resultado} {moedaDestino}</h4>
        </div>
      )}
    </Pagina>
  );
}
