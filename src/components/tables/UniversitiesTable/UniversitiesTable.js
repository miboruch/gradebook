import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Table from '../../molecules/Table/Table';
import * as TableStyles from '../../../style/tableStyles';
import { Link } from 'react-router-dom';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-size: 12px;
  letter-spacing: 1px;
`;

const UniversitiesTable = ({ data }) => {
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
          <StyledLink to={`/university/${values.universityId}`}>Zobacz</StyledLink>
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

export default UniversitiesTable;
