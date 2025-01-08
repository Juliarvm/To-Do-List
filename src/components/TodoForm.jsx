import { useState } from 'react';

const TodoForm = ({ addTodo, categories, addCategory, removeCategory }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [isEditingCategories, setIsEditingCategories] = useState(false);
    const [rating, setRating] = useState(1);  // Estado para o nível de avaliação

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) {
            alert("Por favor, preencha o título da tarefa e selecione a categoria.");
            return;
        }
        addTodo(value, category, rating); // Passando o rating para a função addTodo
        setValue("");
        setCategory("");
        setRating(1); // Resetando a avaliação após enviar
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        if (!newCategory) {
            alert("Por favor, preencha o nome da nova categoria.");
            return;
        }
        addCategory(newCategory);
        setNewCategory("");
    };

    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                {/* Sistema de flores para selecionar o nível de avaliação */}
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((flowerRating) => (
                        <div
                            key={flowerRating}
                            className={`flower ${flowerRating <= rating ? "selected" : ""}`}
                            onClick={() => setRating(flowerRating)}
                        />
                    ))}
                </div>

                <button className="create-btn" type="submit">Criar tarefa</button>
            </form>

            {/* Código para editar categorias */}
            <button
                className="edit-categories-btn"
                onClick={() => setIsEditingCategories(!isEditingCategories)}
            >
                {isEditingCategories ? "Fechar edição de categorias" : "Editar categorias"}
            </button>

            {isEditingCategories && (
                <div className="edit-categories">
                    <h3>Categorias atuais:</h3>
                    <ul>
                        {categories.map((cat) => (
                            <li key={cat}>
                                {cat}
                                <button
                                    className="remove-category-btn"
                                    onClick={() => removeCategory(cat)}
                                >
                                    Excluir
                                </button>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleAddCategory}>
                        <input
                            type="text"
                            placeholder="Nova categoria"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <button type="submit">Adicionar categoria</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default TodoForm;