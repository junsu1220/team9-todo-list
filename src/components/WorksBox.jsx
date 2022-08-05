import React from "react";
import styled from "styled-components";

const WorksBox = () => {
    return (
        
        <Container>
            <TodoBox>
                <h3>title</h3>
                <p>작성자</p>
                <Removebtn>삭제</Removebtn>
            </TodoBox>
        </Container>
    
    );
};

const Container = styled.div`
dispaly: flex;
padding 20px;;
`
const TodoBox = styled.div`
width: 800px;
height: 100px;
border: 1px solid #ddd;
border-radius: 10px;
margin: 20px;
padding: 10px;`

const Removebtn = styled.button`
background: white;
position: relative;
top: -60px;
left: 750px;
border: 1px solid #ddd;
borer-radius: 10px;
padding: 10px; 
`

export default WorksBox;