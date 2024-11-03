"use client"

import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table, Image } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function AlunosPage() {
  const [alunos, setAlunos] = useState([])
  const [faculdades, setFaculdades] = useState([])

  useEffect(() => {
    const alunosLocalStorage = JSON.parse(localStorage.getItem("alunos")) || []
    setAlunos(alunosLocalStorage)
    console.log(alunosLocalStorage)

    const faculdadesLocalStorage = JSON.parse(localStorage.getItem("faculdades")) || []
    setFaculdades(faculdadesLocalStorage)

  }, [])

  function excluir(aluno) {
    if (window.confirm(`Deseja realmente excluir o aluno ${aluno.nome}?`)) {
      const novaLista = alunos.filter(item => item.id !== aluno.id)
      localStorage.setItem('alunos', JSON.stringify(novaLista))
      setAlunos(novaLista)
      alert("Aluno excluído com sucesso!")
    }
  }

  // Função auxiliar para encontrar o nome do curso pelo ID
  function obterNomeFaculdade(id) {
    const faculdade = faculdades.find(faculdade => faculdade.id === id)
    return faculdade ? faculdade.nome : 'Caculdade não encontrado'
  }

  return (
    <Pagina titulo={"Alunos"}>
       <div className='text-end mb-2'>
        <Button href='/alunos/form'><FaPlusCircle /> Novo</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Faculdade</th>
            <th>Curso</th>
            <th>Período</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id}>
              <td className="text-center">
                {/* Exibe uma imagem de perfil */}
                <Image src={aluno.foto} roundedCircle width={50} height={50} />
              </td>
              <td>{aluno.matricula}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.sobrenome}</td>
              <td>{obterNomeFaculdade(aluno.faculdade)}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.periodo}</td>
              <td className="text-center">
                <Button className="me-2" href={`/alunos/form?id=${aluno.id}`} variant="warning">
                  <FaPen />
                </Button>
                <Button variant="danger" onClick={() => excluir(aluno)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}
