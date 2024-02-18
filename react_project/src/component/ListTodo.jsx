function ListTodo() {
    let item = "collage";
    let date = "12/03/2001";
  return (
    <center>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm">
            <h3>{item}</h3>
          </div>
          <div class="col-sm">{date}</div>
          <div class="col-sm">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default ListTodo;
