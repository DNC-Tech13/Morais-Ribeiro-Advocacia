import axios from "axios";

export const submitForm = (formData, onClose) => {
  console.log('Formulário válido:', formData);
  axios.post('https://formspree.io/f/mpzvnqnv', formData)
  onClose();
};

export const validarForm = (formData) => {
  const errors = {};
  if (!formData.nome) {
    errors.nome = 'Nome é obrigatório';
  }
  if (!formData.email) {
    errors.email = 'E-mail é obrigatório';
  }
  if (!formData.telefone) {
    errors.telefone = 'Telefone é obrigatório';
  }
  if (formData.areaAtuacao === 'default') {
    errors.areaAtuacao = 'Selecione uma área de atuação';
  }
  return errors;
};

export const formatTelefone = (value) => {
    console.log(value)
    value = value.replace(/\D/g, ''); 
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); 
    value = value.replace(/(\d)(\d{4})$/, '$1-$2'); 
    console.log(value)
    return value
  }
