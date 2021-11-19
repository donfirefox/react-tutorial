import React, { Component } from "react";

const Tableheader = () => {
  return (
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Cargo</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.dataToBody.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Eliminar</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { dataToTable, removeCharacter } = this.props;
    return (
      <table>
        <Tableheader />
        <TableBody dataToBody={dataToTable} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
