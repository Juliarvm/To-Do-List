import React, { useState } from 'react';

const Todo = ({ todo, removeTodo, completeTodo, updateRating }) => {
    const [rating, setRating] = useState(todo.rating || 1); // Rating vindo da tarefa

    // Função para alterar a avaliação da tarefa
    const handleRatingChange = (newRating) => {
        setRating(newRating);
        updateRating(todo.id, newRating); // Atualiza a avaliação na lista de tarefas
    };

    return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>

                {/* Exibição do rating com flores usando CSS */}
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((flowerRating) => (
                        <div
                            key={flowerRating}
                            className={`flower ${flowerRating <= rating ? "selected" : ""}`}
                            onClick={() => handleRatingChange(flowerRating)}
                        />
                    ))}
                </div>
            </div>

            <div>
                <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        </div>
    );
};

export default Todo;