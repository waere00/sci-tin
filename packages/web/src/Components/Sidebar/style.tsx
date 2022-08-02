import styled from 'styled-components'

export const Container = styled.div`
    width: 400px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
`
export const Text = styled.div`
    margin-left: 20px;
    color: #ff506b;
    font-weight: 500;
    font-size: 16px;
`
export const ContainerPairs = styled.div`
    width: calc(100% - 20px);
    margin: 0 20px 20px 20px;
    padding: 20px 0 10px 0;
    display: flex;
    overflow-x: scroll;
    box-sizing: border-box;
`
export const Messages = styled.div`
    flex-grow: 1;
    margin: 10px 0 0 20px;
`
