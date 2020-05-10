import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as TableStyles from '../../../style/tableStyles';
import { Link } from 'react-router-dom';
import Table from '../../molecules/Table/Table';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  color: #2d2d2d;
  letter-spacing: 1px;
`;

const UniversityStudentsTable = ({ data, universityCourses }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Numer albumu',
        accessor: 'albumNo'
      },
      {
        Header: 'Student',
        accessor: (props) => `${props.name} ${props.lastName}`
      },
      {
        Header: 'Kierunek',
        accessor: 'course',
        Cell: (event) => {
          const { course } = universityCourses.find(
            (course) => course.id === parseInt(event.value)
          );
          return course;
        }
      },
      {
        Header: 'Wybierz',
        accessor: 'userId',
        Cell: (event) => <StyledLink to={`/student/${event.value}`}>Zobacz</StyledLink>
      }
    ],
    []
  );
  return (
    <StyledWrapper>
      <Table data={data} columns={columns} />
    </StyledWrapper>
  );
};

UniversityStudentsTable.propTypes = {
  data: PropTypes.array.isRequired
};

const mapStateToProps = ({ universityReducer: { universityCourses } }) => {
  return { universityCourses };
};

export default connect(mapStateToProps)(UniversityStudentsTable);
