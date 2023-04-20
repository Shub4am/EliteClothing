import styled from 'styled-components';
import Button from '../Button';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 400px) {
    font-size: 12px;
    height: 100px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  @media screen and (max-width: 400px) {
    height: 10px;
    min-width: 350px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 400px) {
    margin-left: 80px;
  }
`;

export const StripeCardText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: blue;
  @media screen and (max-width: 400px) {
    margin-top: 90px;
    font-size: 16px;
  }
`;
