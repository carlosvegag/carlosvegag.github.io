class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<table id="tablanav">
       <tr>
        <td>
          <a href="index.html">
            <span class=
                "material-icons">
              home
            </span>
            Inicio
          </a>
        </td>
        </tr>
        <tr>
        <td>
          <a href="gps.html">
            <span class=
                "material-icons">
              location_searching
            </span>
            GPS
          </a>
        </td>
        </tr>
        <tr>
        <td>
          <a href="archivos.html">
            <span class=
                "material-icons">
              attach_file
            </span>
            Archivos
          </a>
        </td>
        </tr>
        <tr>
        <td>
          <a href="ayuda.html">
            <span class=
                "material-icons">
              help
            </span>
            Ayuda
          </a>
        </td>
      </tr>
      </table>`;
  }
}
customElements.define(
  "mi-nav", MiNav);
