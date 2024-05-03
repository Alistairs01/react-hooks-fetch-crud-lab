import React from "react";

function QuestionItem({ question, onUpdateCorrectIndex, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers

   ? answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  )): null;

  const handleUpdateCorrectIndexChange = (event) => {
    const newIndex = parseInt(event.target.value);
    onUpdateCorrectIndex(id, newIndex);

  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdateCorrectIndexChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
