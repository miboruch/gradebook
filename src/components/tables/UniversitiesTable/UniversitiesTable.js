import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../../molecules/Table/Table';
import * as TableStyles from '../../../style/tableStyles';
import { Link } from 'react-router-dom';
import { setCurrentUniversity } from '../../../actions/universityActions';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-size: 12px;
  letter-spacing: 1px;
`;

const UniversitiesTable = ({ data, setCurrentUniversity }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nazwa',
        accessor: 'universityName'
      },
      {
        Header: 'Wybierz',
        accessor: 'universityId',
        Cell: ({ row: { values } }) => (
          <StyledLink
            to={`/university/${values.universityId}`}
            onClick={() => setCurrentUniversity(values.universityName)}
          >
            Zobacz
          </StyledLink>
        )
      }
    ],
    []
  );
  return <StyledWrapper>{data && <Table data={data} columns={columns} />}</StyledWrapper>;
};

UniversitiesTable.propTypes = {
  data: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUniversity: (universityName) => dispatch(setCurrentUniversity(universityName))
  };
};

export default connect(null, mapDispatchToProps)(UniversitiesTable);
