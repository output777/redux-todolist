import React from 'react';
import styled from 'styled-components';

const Form = ({handleSubmit, handleTitle, handleDesc, title, desc}) => {
  return (
    <Container onSubmit={handleSubmit}>
      <InputBox>
        <label htmlFor="title" style={{marginRight: '1rem'}}>
          제목
        </label>
        <Input
          id="title"
          type="text"
          name="title"
          style={{marginRight: '2rem'}}
          value={title}
          onChange={handleTitle}
        />
        <label htmlFor="desc" style={{marginRight: '1rem'}}>
          내용
        </label>
        <Input id="desc" type="text" name="desc" value={desc} onChange={handleDesc} />
      </InputBox>
      <BtnBox>
        <Button>추가하기</Button>
      </BtnBox>
    </Container>
  );
};

export default Form;

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background-color: #eee;
  border-radius: 10px;
`;
const InputBox = styled.div``;
const Input = styled.input`
  border: none;
  outline: none;
  width: 180px;
  height: 30px;
  border-radius: 20px;
`;
const BtnBox = styled.div``;
const Button = styled.button``;
