import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import feedbackTypes from "../data/feedbackTypes.json";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const [formData, setFormData] = useState({ name: "", feedbackType: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "O nome é obrigatório";
    if (!formData.message) newErrors.message = "A mensagem é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Dados enviados:", formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.formulario}>
      <FormGroup>
        <Label for="name">Nome</Label>
        <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        {errors.name && <small className={styles.error}>{errors.name}</small>}
      </FormGroup>
      <FormGroup>
        <Label for="feedbackType">Tipo de Feedback</Label>
        <Input type="select" name="feedbackType" id="feedbackType" value={formData.feedbackType} onChange={handleChange}>
          <option value="">Selecione...</option>
          {feedbackTypes.map((type) => (
            <option key={type.id} value={type.value}>{type.label}</option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="message">Mensagem</Label>
        <Input type="textarea" name="message" id="message" value={formData.message} onChange={handleChange} />
        {errors.message && <small className={styles.error}>{errors.message}</small>}
      </FormGroup>
      <Button type="submit" color="primary">Enviar</Button>
    </Form>
  );
};

export default Formulario;