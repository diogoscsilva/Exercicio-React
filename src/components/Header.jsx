
export function Header(props) {
  return (
    <header className="main-header">
      <div className="container">
        <h1>TecnoStore</h1>
        {props.children}
      </div>
    </header>
  );
}