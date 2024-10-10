'use client';

import Pagina from "@/components/Pagina";
import { Formik } from 'formik';
import { useState } from 'react';  
import { Button, CardImg, Form, Modal } from "react-bootstrap";
import { FaCheck, FaTrashAlt } from 'react-icons/fa'


const imagensMoedas = {
  USD: '/img/dollar.png',    // Caminho do dólar
  EUR: '/img/euro.png',      // Caminho do euro
  BTC: '/img/bitcoin.png'    // Caminho do bitcoin
};

export default function ConversorMoedaPage() {
  const [resultado, setResultado] = useState(null);
  const [moedaDestino, setMoedaDestino] = useState('');

  function converter(values) {
    // Valores fixos para conversão
    const taxasConversao = {
      USD: 0.20, // 1 real = 0.20 dólares
      EUR: 0.18, // 1 real = 0.18 euros
      BTC: 0.000003 // 1 real = 0.000003 bitcoins
    };

    // Calcular o valor convertido com base na moeda selecionada
    const valorConvertido = parseFloat(values.valor) * (taxasConversao[values.moedaDestino] || 0);

    // Exibir o resultado com 2 casas decimais para USD e EUR, e 6 para BTC
    const resultadoFormatado = values.moedaDestino === 'BTC' 
      ? valorConvertido.toFixed(6) 
      : valorConvertido.toFixed(2);

    setResultado(resultadoFormatado);
    setMoedaDestino(values.moedaDestino);
  }

  function limpar(resetForm) {
    resetForm();
    setResultado(null);
    setMoedaDestino('');
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

      {/* Formulário com Formik */}
      <Formik
        initialValues={{
          valor: '0',
          moedaDestino: ''
        }}
        onSubmit={(values, { resetForm }) => converter(values)}
      >
        {({ values, handleChange, handleSubmit, handleReset }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Valor em Reais (BRL):</Form.Label>
              <Form.Control
                type="number"
                name="valor"
                value={values.valor}
                onChange={handleChange}
                min={0.01}
                step={0.01}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Moeda de Destino:</Form.Label>
              <Form.Select
                name="moedaDestino"
                value={values.moedaDestino}
                onChange={handleChange}
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
              <Button 
                type="button" 
                variant="danger" 
                className="ms-2" 
                onClick={() => limpar(handleReset)}
              >
                <FaTrash /> Limpar
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>

      {/* Exibe o resultado */}
      {resultado !== null && moedaDestino && (
        <div className="mt-4 text-center">
          <h4>Resultado: {resultado} {moedaDestino}</h4>
        </div>
      )}
    </Pagina>
  );
}
