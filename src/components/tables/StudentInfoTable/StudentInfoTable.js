import React, { useContext } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../../molecules/Table/Table';
import * as TableStyles from '../../../style/tableStyles';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StudentInfoTable = ({ userInfo }) => {
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
      {userInfo && <Table data={[userInfo]} columns={columns} isStudentInfoPage={true} />}
    </StyledWrapper>
  );
};

StudentInfoTable.propTypes = {
  studentData: PropTypes.array.isRequired
};

const mapStateToProps = ({ userReducer: { userInfo } }) => {
  return { userInfo };
};

export default connect(mapStateToProps)(StudentInfoTable);
