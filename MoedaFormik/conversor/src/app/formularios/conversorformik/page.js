'use client';

import { useState } from 'react';  
import Pagina from "@/components/Pagina";
import { Button, Form, Container, Card } from "react-bootstrap";
import { FaExchangeAlt, FaTrash } from "react-icons/fa";
import { Formik } from 'formik';

const imagensMoedas = {
  USD: '/img/dollar.png',
  EUR: '/img/euro.png',
  BTC: '/img/bitcoin.png'
};

const taxasConversao = {
  USD: 0.20,
  EUR: 0.18,
  BTC: 0.000003
};

export default function ConversorMoedaPage() {
  const [resultado, setResultado] = useState(null);
  const [moedaDestino, setMoedaDestino] = useState('');

  const converter = (values) => {
    const valorConvertido = parseFloat(values.valor) * (taxasConversao[values.moedaDestino] || 0);
    const resultadoFormatado = values.moedaDestino === 'BTC' 
      ? valorConvertido.toFixed(6) 
      : valorConvertido.toFixed(2);

    setResultado(resultadoFormatado);
    setMoedaDestino(values.moedaDestino);
  };

  const limpar = (resetForm) => {
    resetForm();
    setResultado(null);
    setMoedaDestino('');
  };

  return (
    <Pagina titulo="Conversor de Moeda">
      <Container className="d-flex justify-content-center mt-5">
        <Card style={{ maxWidth: '500px', width: '100%' }} className="p-4 shadow">
          <Card.Body>
            {moedaDestino && imagensMoedas[moedaDestino] && (
              <div className="text-center mb-4">
                <img 
                  src={imagensMoedas[moedaDestino]} 
                  alt={`Ícone da moeda ${moedaDestino}`}
                  style={{ width: '150px', height: 'auto' }}
                  className="img-fluid"
                />
              </div>
            )}

            <Formik
              initialValues={{ valor: '0', moedaDestino: '' }}
              onSubmit={(values, { resetForm }) => {
                converter(values);
                resetForm();
              }}
            >
              {({ values, handleChange, handleSubmit, resetForm }) => (
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
                      placeholder="Digite o valor em BRL"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Moeda de Destino:</Form.Label>
                    <Form.Select
                      name="moedaDestino"
                      value={values.moedaDestino}
                      onChange={handleChange}
                    >
                      <option value="">Selecione a moeda</option>
                      <option value="USD">Dólar (USD)</option>
                      <option value="EUR">Euro (EUR)</option>
                      <option value="BTC">Bitcoin (BTC)</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="text-center">
                    <Button type="submit" variant="primary" className="me-2">
                      <FaExchangeAlt /> Converter
                    </Button>
                    <Button 
                      type="button" 
                      variant="secondary" 
                      onClick={() => limpar(resetForm)}
                    >
                      <FaTrash /> Limpar
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>

            {resultado !== null && moedaDestino && (
              <div className="mt-4 text-center">
                <h5 className="text-success">Resultado: {resultado} {moedaDestino}</h5>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </Pagina>
  );
}
