import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn naga">Add</button>
          <h1 className="header-title">Todo Lists</h1>
          <button className="header-btn color-red">Clear</button>
        </section>

        <section className="add">
          <form className="add-form">
            <input type="text" className="add-input" />
            <button className="add-btn">Add</button>
          </form>
        </section>

        <section className="todo">
          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>

          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>

          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>

          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>

          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>
          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>
          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>

          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>

          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>

          <div className="tod">
            <span className="tod-text">Learning React</span>
          </div>
        </section>
      </div>
    </div>
  );
}
