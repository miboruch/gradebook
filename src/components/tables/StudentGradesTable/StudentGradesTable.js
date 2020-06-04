import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as TableStyles from '../../../style/tableStyles';
import Table from '../../molecules/Table/Table';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/ban.svg';
import { deleteStudentGrade } from '../../../actions/studentActions';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 25px;
  height: 25px;
  fill: tomato;
  cursor: pointer;
`;

const StudentGradesTable = ({ data, userInfo, deleteStudentGrade }) => {
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
      },
      {
        Header: () => (userInfo.admin ? 'Usuń' : null),
        id: 'delete',
        Cell: (e) => {
          const gradeID = e.row.original.id;
          const studentId = e.row.original.studentId;
          return (
            <>
              {userInfo.admin ? (
                <StyledDeleteIcon onClick={() => deleteStudentGrade(gradeID, studentId)} />
              ) : null}
            </>
          );
        }
      }
    ],
    []
  );

  return <StyledWrapper>{data && <Table data={data} columns={columns} />}</StyledWrapper>;
};

StudentGradesTable.propTypes = {
  data: PropTypes.array.isRequired
};

const mapStateToProps = ({ userReducer: { userInfo } }) => {
  return { userInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudentGrade: (gradeID, studentID) => dispatch(deleteStudentGrade(gradeID, studentID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentGradesTable);
