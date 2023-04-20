import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    width: 350px;
    padding: 15px 8px;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 50%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  @media screen and (max-width: 400px) {
    width: 50%;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
  @media screen and (max-width: 400px) {
    margin: 0px;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
  }
`;
