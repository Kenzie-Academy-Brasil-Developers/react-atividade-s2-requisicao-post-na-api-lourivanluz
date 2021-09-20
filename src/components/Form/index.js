import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Display } from "../Display";
import axios from "axios";
import { useState } from "react";

const FormSyled = styled.form`
  max-width: 900px;
  background-color: royalblue;
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;
  align-items: center;

  input {
    width: 400px;
    height: 40px;
    border: none;
    border-radius: 15px;
    outline: none;
    padding-left: 15px;
    margin-bottom: 15px;
  }
  button {
    height: 40px;
    width: 80px;
    padding: 5px 15px;
    color: white;
    background-color: purple;
    border: none;
    border-radius: 15px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export function Form() {
  const [isSucess, setIsSucess] = useState(false);
  const [visible, setVisible] = useState(false);
  const formSchema = yup.object().shape({
    username: yup.string().required("Nome do usuario obrigadório"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        console.log(response);
        setIsSucess(true);
      })
      .catch((err) => {
        console.error(" Error: ", err);
        setIsSucess(false);
      });
    setVisible(true);
  };

  return (
    <FormSyled onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Usuário" type="text" {...register("username")} />
      {errors.userName?.message}
      <input placeholder="Senha" type="password" {...register("password")} />
      {errors.password?.message}
      <button type="submit">Login</button>
      {visible && <Display isSucess={isSucess} />}
    </FormSyled>
  );
}
