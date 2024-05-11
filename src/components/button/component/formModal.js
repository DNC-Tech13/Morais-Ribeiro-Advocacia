import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import './modal.scss'
import { fetchAreas } from '@/lib/getAerasAtuacao';
import { formatTelefone, submitForm, validarForm } from '@/lib/casosDeUso/useEntrarContato';

const FormModal = ({onClose, show}) => {
  const [data, setData] = useState(undefined)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    areaAtuacao: 'default'
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const areas = await fetchAreas();
        setData(areas);        
      } catch (error) {
        console.error('Error fetching areas:', error);        
      }
    };

    fetchData();
  }, []);
  const handleChange = (e) => {
    let { id, value } = e.target;

    if (id === 'telefone' && value.length <= 15) {
      value = formatTelefone(value)
    }
    setFormData({
      ...formData,
      [id]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validarForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      submitForm(formData, onClose);
    }
  };
  
  return (
    <div>
      <Modal
        size="md"
        show={show}
        onHide={onClose}
        centered
        dialogClassName='formModal-dialog'
        backdropClassName='formModal-backdrop'    
        contentClassName='formModal-content' 
      >
          <Form className='formModal-body' onSubmit={handleSubmit}>
            <h3>Contato</h3>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Insira o nome" 
                value={formData.nome}
                onChange={handleChange}
                isInvalid={!!errors.nome}   
                autoComplete='off'
              />
              <Form.Control.Feedback type="invalid">
                {errors.nome}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="email@email" 
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                autoComplete='off'
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control 
                type="tel" 
                placeholder="(99) 9 9999-9999" 
                value={formData.telefone}
                onChange={handleChange}
                isInvalid={!!errors.telefone}
                autoComplete='off'
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="areaAtuacao">
              <Form.Label>Area de Atuação</Form.Label>
              <Form.Select 
                value={formData.areaAtuacao}
                onChange={handleChange}
                isInvalid={!!errors.areaAtuacao}
                autoComplete='off'
              >
                <option key={'default'} value={'default'}>Selecione...</option>
                {data ? data.map((area, index) => (
                  <option key={index} value={area.name}>{area.name}</option>
                )) : null}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.areaAtuacao}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">
              Enviar mensagem
            </Button>
          </Form>
      </Modal>     
    </div>
  )
}

export default FormModal;