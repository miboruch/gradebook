import React from 'react';
import * as TableStyles from '../../../style/tableStyles';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

const Table = ({ data, columns, isStudentInfoPage }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });
  return (
    <TableStyles.StyledTable isStudentInfoPage={isStudentInfoPage} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <TableStyles.StyledTableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableStyles.StyledTableHeading {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableStyles.StyledTableHeading>
            ))}
          </TableStyles.StyledTableRow>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <>
              <TableStyles.StyledTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableStyles.StyledTd {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableStyles.StyledTd>
                  );
                })}
              </TableStyles.StyledTableRow>
            </>
          );
        })}
      </tbody>
    </TableStyles.StyledTable>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.any.isRequired,
  isStudentInfoPage: PropTypes.bool
};

Table.defaultProps = {
  isStudentInfoPage: false
};

export default Table;
