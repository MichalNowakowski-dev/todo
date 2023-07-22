interface Props {
  addTask: (e: any) => void;
}

function AddTask({ addTask }: Props) {
  return (
    <form onSubmit={addTask}>
      <label htmlFor="todoInput">Wpisz następne zadanie: </label>
      <input
        placeholder="Np. Wyrzucić smieci..."
        type="text"
        id="todoInput"
        className="form-control"
        aria-label="New task"
      />
      <button type="submit" id="submitInput" className="btn btn-primary">
        Zatwierdź
      </button>
    </form>
  );
}

export default AddTask;
