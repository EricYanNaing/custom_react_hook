import useToggle from "./hooks/useToggle";

function App() {
  const [isShow, toggle] = useToggle();
  return <>
    <section>
      <button onClick={toggle}>{isShow? "Hide" : "Show"}</button>
      {isShow && <h1>Component is showing</h1>}
    </section>
  </>
}

export default App;
