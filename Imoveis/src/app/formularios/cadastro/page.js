'use client'

import Pagina from '@/app/components/Pagina'
import { Formik } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FaCheck, FaTrash } from 'react-icons/fa';
import * as Yup from 'yup';

// Removi o ImoveisPage porque o foco é no CadastroPage

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
    <Pagina titulo={"Cadastro de Imóveis"}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cadastrar}
      >
        {({ values, errors, touched, handleBlur, handleSubmit, handleReset, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            {/* Formulário de Cadastro de Imóveis */}
            <Row className='mb-2'>
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
                />
                <Form.Control.Feedback type='invalid'>{errors.finalidade}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
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
                />
                <Form.Control.Feedback type='invalid'>{errors.area}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
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
                />
                <Form.Control.Feedback type='invalid'>{errors.banheiros}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Descrição:</Form.Label>
                <Form.Control
                  name='descricao'
                  type='text'
                  value={values.descricao}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.descricao && !errors.descricao}
                  isInvalid={touched.descricao && !!errors.descricao}
                />
                <Form.Control.Feedback type='invalid'>{errors.descricao}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Foto:</Form.Label>
                <Form.Control
                  name='foto'
                  type='text'
                  value={values.foto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.foto && !errors.foto}
                  isInvalid={touched.foto && !!errors.foto}
                />
                <Form.Control.Feedback type='invalid'>{errors.foto}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Endereço */}
            <div className='text-center'>
              <h3>Endereço</h3>
              <hr />
            </div>

            <Row className='mb-2'>
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
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.logradouro}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
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
                />
              </Form.Group>
            </Row>

            {/* Dono do imóvel */}
            <div className='text-center'>
              <h3>Proprietário</h3>
              <hr />
            </div>

            <Row className='mb-2'>
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
                />
                <Form.Control.Feedback type='invalid'>{errors.proprietario?.cpf}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
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
                />
                <Form.Control.Feedback type='invalid'>{errors.proprietario?.telefone}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  name='proprietario.email'
                  type='text'
                  value={values.proprietario.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.proprietario?.email && !errors.proprietario?.email}
                  isInvalid={touched.proprietario?.email && !!errors.proprietario?.email}
                />
                <Form.Control.Feedback type='invalid'>{errors.proprietario?.email}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <div className="d-flex justify-content-between mt-4">
              <Button type="submit" variant="success">
                <FaCheck /> Salvar
              </Button>
              <Button type="button" variant="warning" onClick={handleReset}>
                <FaTrash /> Limpar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
