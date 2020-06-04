import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Table from '../../molecules/Table/Table';
import * as TableStyles from '../../../style/tableStyles';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StudentInfoTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Numer albumu',
        accessor: 'albumNo',
        Cell: (e) => <TableStyles.StyledBold>{e.value}</TableStyles.StyledBold>
      },
      {
        Header: 'Student',
        accessor: (props) => `${props.name} ${props.lastName}`
      },
      {
        Header: 'Uniwersytet',
        accessor: 'universityName'
      },
      {
        Header: 'Kierunek',
        accessor: 'courseName'
      }
    ],
    []
  );

  return (
    <StyledWrapper>
      {data && <Table data={data} columns={columns} isStudentInfoPage={true} />}
    </StyledWrapper>
  );
};

StudentInfoTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default StudentInfoTable;
