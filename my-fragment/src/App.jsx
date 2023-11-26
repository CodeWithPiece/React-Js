import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center m-3">
          <h1>Healthy Foods</h1>
        </div>
        <div className="col-md-8">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              A simple default list group item
            </a>

            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-primary"
            >
              A simple primary list group item
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-secondary"
            >
              A simple secondary list group item
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-success"
            >
              A simple success list group item
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-danger"
            >
              A simple danger list group item
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-warning"
            >
              A simple warning list group item
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-info"
            >
              A simple info list group item
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-light"
            >
              A simple light list group item
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark"
            >
              A simple dark list group item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
