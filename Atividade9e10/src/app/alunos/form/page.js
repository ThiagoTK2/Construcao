'use client';

import Pagina from '@/components/Pagina';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Card } from 'react-bootstrap';
import { FaArrowLeft, FaCheck, FaTrash } from "react-icons/fa";
import { v4 } from 'uuid';
import * as Yup from 'yup';

export default function AlunoFormPage(props) {
  const router = useRouter();
  const [faculdades, setFaculdades] = useState([]);
  const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
  const [cursos, setCursos] = useState([]);
  const id = props.searchParams.id;
  const alunoEditado = alunos.find(item => item.id == id);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFieldValue("foto", base64String); // Define o valor do campo 'foto' com a string base64
        setPreviewImage(base64String); // Atualiza a prévia da imagem
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const faculdadesLocal = JSON.parse(localStorage.getItem('faculdades')) || [];
    const cursosSalvos = JSON.parse(localStorage.getItem('cursos')) || [];
    setFaculdades(faculdadesLocal);
    setCursos(cursosSalvos);
  }, []);

  function salvar(dados) {
    if (alunoEditado) {
      Object.assign(alunoEditado, dados);
      localStorage.setItem('alunos', JSON.stringify(alunos));
    } else {
      dados.id = v4();
      alunos.push(dados);
      localStorage.setItem('alunos', JSON.stringify(alunos));
    }

    alert("Aluno cadastrado com sucesso!");
    router.push("/alunos");
  }

  const initialValues = {
    nome: '',
    sobrenome: '',
    email: '',
    dataNascimento: '',
    telefone: '',
    faculdade: '',
    curso: '',
    periodo: '',
    matricula: '',
    foto: null
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    sobrenome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    dataNascimento: Yup.date().required("Campo obrigatório"),
    telefone: Yup.string().required("Campo obrigatório"),
    faculdade: Yup.string().required("Campo obrigatório"),
    curso: Yup.string().required("Campo obrigatório"),
    periodo: Yup.string().required("Campo obrigatório"),
    matricula: Yup.string().required("Campo obrigatório"),
    foto: Yup.string().required("Campo obrigatório") // Agora aceita string base64
  });

  return (
    <Pagina titulo={"Cadastro de Aluno"}>
      <Formik
        initialValues={alunoEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="p-3">
            <Card className="mb-3">
              <Card.Header as="h4" className="text-center">Dados Pessoais</Card.Header>
              <Card.Body>
                <Row className='mb-3'>
                  <Form.Group as={Col}>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                      name='nome'
                      type='text'
                      value={values.nome}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.nome && !errors.nome}
                      isInvalid={touched.nome && errors.nome}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.nome}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Sobrenome:</Form.Label>
                    <Form.Control
                      name='sobrenome'
                      type='text'
                      value={values.sobrenome}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.sobrenome && !errors.sobrenome}
                      isInvalid={touched.sobrenome && errors.sobrenome}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.sobrenome}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-3'>
                  <Form.Group as={Col}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      name='email'
                      type='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Data de Nascimento:</Form.Label>
                    <Form.Control
                      name='dataNascimento'
                      type='date'
                      value={values.dataNascimento}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.dataNascimento && !errors.dataNascimento}
                      isInvalid={touched.dataNascimento && errors.dataNascimento}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.dataNascimento}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-3'>
                  <Form.Group as={Col}>
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control
                      name='telefone'
                      type='text'
                      value={values.telefone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.telefone && !errors.telefone}
                      isInvalid={touched.telefone && errors.telefone}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.telefone}</Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Header as="h4" className="text-center">Acadêmico</Card.Header>
              <Card.Body>
                <Row className='mb-3'>
                  <Form.Group as={Col}>
                    <Form.Label>Faculdade:</Form.Label>
                    <Form.Select
                      name='faculdade'
                      value={values.faculdade}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.faculdade && !errors.faculdade}
                      isInvalid={touched.faculdade && errors.faculdade}
                    >
                      <option value="">Selecione</option>
                      {faculdades.map(faculdade => (
                        <option key={faculdade.id} value={faculdade.id}>{faculdade.nome}</option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.faculdade}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Curso:</Form.Label>
                    <Form.Select
                      name='curso'
                      value={values.curso}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.curso && !errors.curso}
                      isInvalid={touched.curso && errors.curso}
                    >
                      <option value="">Selecione</option>
                      {cursos.map(curso => (
                        <option key={curso.id} value={curso.nome}>{curso.nome}</option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.curso}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-3'>
                  <Form.Group as={Col}>
                    <Form.Label>Período:</Form.Label>
                    <Form.Control
                      name='periodo'
                      type='text'
                      value={values.periodo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.periodo && !errors.periodo}
                      isInvalid={touched.periodo && errors.periodo}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.periodo}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Matrícula:</Form.Label>
                    <Form.Control
                      name='matricula'
                      type='text'
                      value={values.matricula}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.matricula && !errors.matricula}
                      isInvalid={touched.matricula && errors.matricula}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.matricula}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* Campo para upload de imagem */}
                <Row className='mb-3'>
                  <Form.Group as={Col}>
                    <Form.Label>Foto:</Form.Label>
                    <Form.Control
                      name='foto'
                      type='file'
                      accept="image/*"
                      onChange={(event) => handleFileChange(event, setFieldValue)} // Passando setFieldValue
                      onBlur={handleBlur}
                      isInvalid={touched.foto && errors.foto}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.foto}</Form.Control.Feedback>
                  </Form.Group>

                  {previewImage && (
                    <Col xs="auto">
                      <img src={previewImage} alt="Prévia da Foto" className="img-thumbnail" style={{ width: '100px', height: '100px' }} />
                    </Col>
                  )}
                </Row>
              </Card.Body>
            </Card>

            <Form.Group className='text-end'>
              <Button className='me-2' variant='secondary' onClick={() => router.push('/alunos')}>
                <FaArrowLeft className='me-1' /> Voltar
              </Button>
              <Button className='me-2' variant='danger' type="reset">
                <FaTrash className='me-1' /> Limpar
              </Button>
              <Button variant='primary' type="submit">
                <FaCheck className='me-1' /> Salvar
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
