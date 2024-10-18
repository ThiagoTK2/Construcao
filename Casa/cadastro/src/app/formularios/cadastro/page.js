'use client';

import Pagina from '@/components/Pagina';
import { Formik } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FaCheck, FaTrash } from 'react-icons/fa';
import * as Yup from 'yup';

export default function CadastroPage() {
  function cadastrar(dados) {
    console.log(dados);
  }

  const initialValues = {
    tipo: '',
    finalidade: '',
    valor: '',
    area: '',
    quartos: '',
    banheiros: '',
    descricao: '',
    foto: '',
    vagasGaragem: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
    },
    proprietario: {
      nome: '',
      cpf: '',
      telefone: '',
      email: ''
    }
  };

  const validationSchema = Yup.object().shape({
    tipo: Yup.string().required("Campo é obrigatório"),
    finalidade: Yup.string().required("Campo é obrigatório"),
    valor: Yup.number().required("Campo é obrigatório").positive("Valor deve ser positivo"),
    area: Yup.number().required("Campo é obrigatório").positive("Área deve ser positiva"),
    quartos: Yup.number().required("Campo é obrigatório").positive("Número de quartos deve ser positivo"),
    banheiros: Yup.number().required("Campo é obrigatório").positive("Número de banheiros deve ser positivo"),
    descricao: Yup.string().required("Campo é obrigatório"),
    endereco: Yup.object().shape({
      cep: Yup.string().required("Campo é obrigatório"),
      logradouro: Yup.string().required("Campo é obrigatório"),
      numero: Yup.string().required("Campo é obrigatório"),
      complemento: Yup.string(),
      bairro: Yup.string().required("Campo é obrigatório"),
      cidade: Yup.string().required("Campo é obrigatório"),
      uf: Yup.string().required("Campo é obrigatório"),
    }),
    proprietario: Yup.object().shape({
      nome: Yup.string().required("Campo é obrigatório"),
      cpf: Yup.string().required("Campo é obrigatório"),
      telefone: Yup.string().required("Campo é obrigatório"),
      email: Yup.string().email("E-mail inválido").required("Campo é obrigatório"),
    })
  });

  return (
    <Pagina titulo="Cadastro de Imóveis">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cadastrar}
      >
        {({ values, errors, touched, handleBlur, handleSubmit, handleReset, handleChange }) => (
          <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow-sm">
            {/* Formulário de Cadastro de Imóveis */}
            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Tipo:</Form.Label>
                <Form.Control
                  name='tipo'
                  type='text'
                  value={values.tipo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.tipo && !errors.tipo}
                  isInvalid={touched.tipo && !!errors.tipo}
                  placeholder="Digite o tipo do imóvel"
                />
                <Form.Control.Feedback type='invalid'>{errors.tipo}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Finalidade:</Form.Label>
                <Form.Control
                  name='finalidade'
                  type='text'
                  value={values.finalidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.finalidade && !errors.finalidade}
                  isInvalid={touched.finalidade && !!errors.finalidade}
                  placeholder="Digite a finalidade"
                />
                <Form.Control.Feedback type='invalid'>{errors.finalidade}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Valor:</Form.Label>
                <Form.Control
                  name='valor'
                  type='number'
                  value={values.valor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.valor && !errors.valor}
                  isInvalid={touched.valor && !!errors.valor}
                  placeholder="Digite o valor do imóvel"
                />
                <Form.Control.Feedback type='invalid'>{errors.valor}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Área:</Form.Label>
                <Form.Control
                  name='area'
                  type='number'
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.area && !errors.area}
                  isInvalid={touched.area && !!errors.area}
                  placeholder="Digite a área em m²"
                />
                <Form.Control.Feedback type='invalid'>{errors.area}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Quartos:</Form.Label>
                <Form.Control
                  name='quartos'
                  type='number'
                  value={values.quartos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.quartos && !errors.quartos}
                  isInvalid={touched.quartos && !!errors.quartos}
                  placeholder="Digite o número de quartos"
                />
                <Form.Control.Feedback type='invalid'>{errors.quartos}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Banheiros:</Form.Label>
                <Form.Control
                  name='banheiros'
                  type='number'
                  value={values.banheiros}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.banheiros && !errors.banheiros}
                  isInvalid={touched.banheiros && !!errors.banheiros}
                  placeholder="Digite o número de banheiros"
                />
                <Form.Control.Feedback type='invalid'>{errors.banheiros}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Endereço */}
            <div className='text-center mt-4'>
              <h4 className="text-primary">Endereço</h4>
              <hr className="mb-3" />
            </div>

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Cep:</Form.Label>
                <Form.Control
                  name='endereco.cep'
                  type='text'
                  value={values.endereco.cep}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.cep && !errors.endereco?.cep}
                  isInvalid={touched.endereco?.cep && !!errors.endereco?.cep}
                  placeholder="Digite o CEP"
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.cep}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Logradouro:</Form.Label>
                <Form.Control
                  name='endereco.logradouro'
                  type='text'
                  value={values.endereco.logradouro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.logradouro && !errors.endereco?.logradouro}
                  isInvalid={touched.endereco?.logradouro && !!errors.endereco?.logradouro}
                  placeholder="Digite o logradouro"
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.logradouro}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Número:</Form.Label>
                <Form.Control
                  name='endereco.numero'
                  type='text'
                  value={values.endereco.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.numero && !errors.endereco?.numero}
                  isInvalid={touched.endereco?.numero && !!errors.endereco?.numero}
                  placeholder="Digite o número"
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.numero}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Complemento:</Form.Label>
                <Form.Control
                  name='endereco.complemento'
                  type='text'
                  value={values.endereco.complemento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Digite o complemento (opcional)"
                />
              </Form.Group>
            </Row>

            {/* Dono do imóvel */}
            <div className='text-center mt-4'>
              <h4 className="text-primary">Proprietário</h4>
              <hr className="mb-3" />
            </div>

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  name='proprietario.nome'
                  type='text'
                  value={values.proprietario.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.proprietario?.nome && !errors.proprietario?.nome}
                  isInvalid={touched.proprietario?.nome && !!errors.proprietario?.nome}
                  placeholder="Digite o nome do proprietário"
                />
                <Form.Control.Feedback type='invalid'>{errors.proprietario?.nome}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>CPF:</Form.Label>
                <Form.Control
                  name='proprietario.cpf'
                  type='text'
                  value={values.proprietario.cpf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.proprietario?.cpf && !errors.proprietario?.cpf}
                  isInvalid={touched.proprietario?.cpf && !!errors.proprietario?.cpf}
                  placeholder="Digite o CPF"
                />
                <Form.Control.Feedback type='invalid'>{errors.proprietario?.cpf}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Telefone:</Form.Label>
                <Form.Control
                  name='proprietario.telefone'
                  type='text'
                  value={values.proprietario.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.proprietario?.telefone && !errors.proprietario?.telefone}
                  isInvalid={touched.proprietario?.telefone && !!errors.proprietario?.telefone}
                  placeholder="Digite o telefone"
                />
                <Form.Control.Feedback type='invalid'>{errors.proprietario?.telefone}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  name='proprietario.email'
                  type='email'
                  value={values.proprietario.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.proprietario?.email && !errors.proprietario?.email}
                  isInvalid={touched.proprietario?.email && !!errors.proprietario?.email}
                  placeholder="Digite o e-mail"
                />
                <Form.Control.Feedback type='invalid'>{errors.proprietario?.email}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Botões */}
            <div className='d-flex justify-content-end'>
              <Button variant="outline-danger" onClick={handleReset} className='mx-2'>
                <FaTrash /> Limpar
              </Button>
              <Button type='submit' variant="outline-primary">
                <FaCheck /> Salvar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
