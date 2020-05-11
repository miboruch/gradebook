import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as TableStyles from '../../../style/tableStyles';
import Table from '../../molecules/Table/Table';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StudentGradesTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Ocena',
        accessor: 'grade',
        Cell: (e) => <TableStyles.StyledBold>{e.value}</TableStyles.StyledBold>
      },
      {
        Header: 'Data',
        accessor: 'date',
        Cell: (e) => `${new Date(e.value).toLocaleDateString()}`
      },
      {
        Header: 'Przedmiot',
        accessor: 'subject'
      }
    ],
    []
  );

  return <StyledWrapper>{data && <Table data={data} columns={columns} />}</StyledWrapper>;
};

StudentGradesTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default StudentGradesTable;
