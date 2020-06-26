import React from 'react';
import styled from 'styled-components'
import Task from './Task'
import {Droppable} from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 10px;
    border: 1px solid #a3a3a3;
    width: 400px;
    border-radius: 3px;
`;
const Title = styled.div`
    padding: 5px;
`;
const TaskList = styled.div`
    padding: 5px;
    background-color: ${props => (props.isDraggingOver ? '#fff88f': '#ffff')};
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <TaskList 
                            {...provided.droppableProps}
                            ref={provided.innerRef} 
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index}/>
                            ))}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}