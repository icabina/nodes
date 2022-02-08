const Note = (props) => {
  return (
    <div className="fila note">
      <h5>{props.note.number}</h5>
      <p>{props.note.text}</p>
    </div>
  );
};

export default Note;
