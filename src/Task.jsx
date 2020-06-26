import React from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
    padding: 10px;
    border: 1px solid #a3a3a3;
    margin-bottom: 10px;
    border-radius: 2px;
    background-color: ${props => (props.isDragging ? '#ff8fec': '#ffff')};
`;

export default class Task extends React.Component {
    render(){
    return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided, snapshot) =>(
                <Container 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps} 
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {this.props.task.content}
                </Container>
            )}
        </Draggable>
    );
    }
}
