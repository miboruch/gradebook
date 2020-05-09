import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as TableStyles from '../../../style/tableStyles';
import Table from '../../molecules/Table/Table';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StudentGradesTable = ({ userGrades }) => {
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
      }
    ],
    []
  );

  return (
    <StyledWrapper>{userGrades && <Table data={userGrades} columns={columns} />}</StyledWrapper>
  );
};

const mapStateToProps = ({ userReducer: { userGrades } }) => {
  return { userGrades };
};

export default connect(mapStateToProps)(StudentGradesTable);
