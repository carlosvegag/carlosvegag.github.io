mi-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

mi-nav ul {
  color: var(--colorPrimario);
  background-color:
    var(--colorPrimarioFondo);
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: stretch;
  margin: 0;
  padding: 0;
}

mi-nav a {
  display: block;
  color: var(--colorPrimario);
  font-size: 0.75rem;
  text-decoration: none;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-align: center;
}

mi-nav a:active {
  background-color:
    var(--colorActive);
}

mi-nav .material-icons {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
