interface Props {
  addTask: (e: any) => void;
}

function AddTask({ addTask }: Props) {
  return (
    <form className="addTask" onSubmit={addTask}>
      <label htmlFor="todoInput">Wpisz następne zadanie: </label>
      <input
        autoComplete="off"
        placeholder="Np. Wyrzucić smieci..."
        type="text"
        // id="todoInput"
        className="form-control todoInput"
        aria-label="New task"
      />
      <button type="submit" id="submitInput" className="btn btn-primary">
        Zatwierdź
      </button>
    </form>
  );
}

export default AddTask;
