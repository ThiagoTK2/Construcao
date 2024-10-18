'use client';

import Pagina from '@/components/Pagina';
import { Formik } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FaCheck, FaTrash } from 'react-icons/fa';
import * as Yup from 'yup';

export default function CadastroPage() {
  const cadastrar = (dados) => {
    console.log(dados);
  };

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
      uf: '',
    },
    proprietario: {
      nome: '',
      cpf: '',
      telefone: '',
      email: '',
    },
  };

  const validationSchema = Yup.object().shape({
    tipo: Yup.string().required('Campo é obrigatório'),
    finalidade: Yup.string().required('Campo é obrigatório'),
    valor: Yup.number().required('Campo é obrigatório').positive('Valor deve ser positivo'),
    area: Yup.number().required('Campo é obrigatório').positive('Área deve ser positiva'),
    quartos: Yup.number().required('Campo é obrigatório').positive('Número de quartos deve ser positivo'),
    banheiros: Yup.number().required('Campo é obrigatório').positive('Número de banheiros deve ser positivo'),
    vagasGaragem: Yup.number().required('Campo é obrigatório').positive('Número de vagas deve ser positivo'),
    descricao: Yup.string().required('Campo é obrigatório'),
    endereco: Yup.object().shape({
      cep: Yup.string().required('Campo é obrigatório'),
      logradouro: Yup.string().required('Campo é obrigatório'),
      numero: Yup.string().required('Campo é obrigatório'),
      complemento: Yup.string(),
      bairro: Yup.string().required('Campo é obrigatório'),
      cidade: Yup.string().required('Campo é obrigatório'),
      uf: Yup.string().required('Campo é obrigatório'),
    }),
    proprietario: Yup.object().shape({
      nome: Yup.string().required('Campo é obrigatório'),
      cpf: Yup.string().required('Campo é obrigatório'),
      telefone: Yup.string().required('Campo é obrigatório'),
      email: Yup.string().email('E-mail inválido').required('Campo é obrigatório'),
    }),
  });

  return (
    <Pagina titulo="Cadastro de Imóveis">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={cadastrar}>
        {({ values, errors, touched, handleBlur, handleSubmit, handleReset, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <FormSection title="Informações do Imóvel">
              <Row className="mb-2">
                <FormField
                  label="Tipo"
                  name="tipo"
                  type="text"
                  value={values.tipo}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.tipo}
                  error={errors.tipo}
                />
                <FormField
                  label="Finalidade"
                  name="finalidade"
                  type="text"
                  value={values.finalidade}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.finalidade}
                  error={errors.finalidade}
                />
              </Row>

              <Row className="mb-2">
                <FormField
                  label="Valor"
                  name="valor"
                  type="number"
                  value={values.valor}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.valor}
                  error={errors.valor}
                />
                <FormField
                  label="Área"
                  name="area"
                  type="number"
                  value={values.area}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.area}
                  error={errors.area}
                />
              </Row>

              <Row className="mb-2">
                <FormField
                  label="Quartos"
                  name="quartos"
                  type="number"
                  value={values.quartos}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.quartos}
                  error={errors.quartos}
                />
                <FormField
                  label="Banheiros"
                  name="banheiros"
                  type="number"
                  value={values.banheiros}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.banheiros}
                  error={errors.banheiros}
                />
              </Row>

              <Row className="mb-2">
                <FormField
                  label="Descrição"
                  name="descricao"
                  type="text"
                  value={values.descricao}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.descricao}
                  error={errors.descricao}
                />
                <FormField
                  label="Foto"
                  name="foto"
                  type="text"
                  value={values.foto}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.foto}
                  error={errors.foto}
                />
              </Row>

              <Row className="mb-2">
                <FormField
                  label="Vagas na Garagem"
                  name="vagasGaragem"
                  type="number"
                  value={values.vagasGaragem}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.vagasGaragem}
                  error={errors.vagasGaragem}
                />
              </Row>
            </FormSection>

            <FormSection title="Endereço">
              <Row className="mb-2">
                <FormField
                  label="CEP"
                  name="endereco.cep"
                  type="text"
                  value={values.endereco.cep}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.endereco?.cep}
                  error={errors.endereco?.cep}
                />
                <FormField
                  label="Logradouro"
                  name="endereco.logradouro"
                  type="text"
                  value={values.endereco.logradouro}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.endereco?.logradouro}
                  error={errors.endereco?.logradouro}
                />
              </Row>

              <Row className="mb-2">
                <FormField
                  label="Número"
                  name="endereco.numero"
                  type="text"
                  value={values.endereco.numero}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.endereco?.numero}
                  error={errors.endereco?.numero}
                />
                <FormField
                  label="Complemento"
                  name="endereco.complemento"
                  type="text"
                  value={values.endereco.complemento}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </Row>

              <Row className="mb-2">
                <FormField
                  label="Bairro"
                  name="endereco.bairro"
                  value={values.endereco.bairro}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.endereco?.bairro}
                  error={errors.endereco?.bairro}
                />
                <FormField
                  label="Cidade"
                  name="endereco.cidade"
                  value={values.endereco.cidade}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.endereco?.cidade}
                  error={errors.endereco?.cidade}
                />
                <FormField
                  label="UF"
                  name="endereco.uf"
                  value={values.endereco.uf}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.endereco?.uf}
                  error={errors.endereco?.uf}
                />
              </Row>
            </FormSection>

            <FormSection title="Proprietário">
              <Row className="mb-2">
                <FormField
                  label="Nome"
                  name="proprietario.nome"
                  value={values.proprietario.nome}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.proprietario?.nome}
                  error={errors.proprietario?.nome}
                />
                <FormField
                  label="CPF"
                  name="proprietario.cpf"
                  value={values.proprietario.cpf}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.proprietario?.cpf}
                  error={errors.proprietario?.cpf}
                />
              </Row>

              <Row className="mb-2">
                <FormField
                  label="Telefone"
                  name="proprietario.telefone"
                  value={values.proprietario.telefone}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.proprietario?.telefone}
                  error={errors.proprietario?.telefone}
                />
                <FormField
                  label="E-mail"
                  name="proprietario.email"
                  type="email"
                  value={values.proprietario.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.proprietario?.email}
                  error={errors.proprietario?.email}
                />
              </Row>
            </FormSection>

            <div className="text-center mt-4">
              <Button type="submit" variant="primary" className="me-2">
                <FaCheck className="me-2" />
                Salvar
              </Button>
              <Button variant="danger" onClick={handleReset}>
                <FaTrash className="me-2" />
                Resetar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}

const FormSection = ({ title, children }) => (
  <div className="form-section">
    <h4>{title}</h4>
    <hr />
    {children}
  </div>
);

const FormField = ({ label, name, type = 'text', value, handleChange, handleBlur, touched, error }) => (
  <Col md={6}>
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched && !!error}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  </Col>
);
