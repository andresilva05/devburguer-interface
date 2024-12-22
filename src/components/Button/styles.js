import styled from 'styled-components';

export const ContainerButton = styled.button`
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    background-color: ${(props) => props.theme.purple};
    font-size: 30px;
    font-family: "Road Rage", sans-serif;
    color: ${(props) => props.theme.white}f;
    
    &:hover {
        background-color: #6F3576 ;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        border: 1px dashed ${(props) => props.theme.white}f;
    }

`;
