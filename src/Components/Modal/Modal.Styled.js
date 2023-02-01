import styled from 'styled-components'

export const ModalStyled = styled.div`
display: ${(props) => props.showModal};
position: fixed;
z-index: 1000;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
overflow: auto;
background-color: rgba(0,0,0,0.5);

main{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 40px;
    border: solid 3px #888;
    margin: auto;
    width: 80vw;
}

.close {
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #fff;
    color: #333;

    &:hover,
    &:focus {
        background-color: #ccc;
        color: #fff;
        cursor: pointer;
    }
}
`