import styled from 'styled-components';
import ReactSelect from 'react-select';

import { Button } from '../../../components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  border-radius: 20px;
  background-color: ${(props) => props.theme.black};
  padding: 20px;
  width: 100%;
  max-width: 308px;
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding: 0 12px;
  border: none;
`;

export const LabelUploud = styled.label`
  cursor: pointer;
  border: 1px dashed ${(props) => props.theme.white};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  color: ${(props) => props.theme.white};
  margin-top: 20px;

  > svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.white};
    margin-right: 4px;
  }
  input {
    display: none;
  }
`;

export const Select = styled(ReactSelect)`
  margin: 20px 0;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.darkRed};
  font-size: 14px;
  line-height: 80%;
  font-weight: 600;
  margin: 5px 0;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  margin-top: 10px;

  input {
    cursor: pointer;
  }
`;