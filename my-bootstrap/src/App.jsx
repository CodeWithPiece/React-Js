import "./App.css";

function App() {
  return (
    <div>
      <button type="button" className="btn btn-primary position-relative">
        Inbox
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
      <br />
      <br />

      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-primary">
        Notifications <span className="badge text-bg-secondary">4</span>
      </button>
    </div>
  );
}

export default App;
