import React from 'react';
import styled from 'styled-components';
import Table from '../../molecules/Table/Table';
import * as TableStyles from '../../../style/tableStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  display: none;
  width: 95%;
  height: 90%;
  justify-content: space-around;
  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StandardTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: () => null,
        id: 'position',
        accessor: 'position',
        Cell: (e) => (
          <TableStyles.StyledPositionWrapper>
            {e.value}
            <TableStyles.IconWrapper>
              <TableStyles.StyledUserIcon />
            </TableStyles.IconWrapper>
          </TableStyles.StyledPositionWrapper>
        )
      },
      {
        Header: 'Nr albumu',
        accessor: 'albumNo',
        Cell: (e) => <TableStyles.StyledBold>{e.value}</TableStyles.StyledBold>
      },
      {
        Header: 'Imię',
        accessor: 'name'
      },
      {
        Header: 'Nazwisko',
        accessor: 'lastName'
      },
      {
        Header: 'Uniwersytet',
        accessor: 'universityName'
      },
      {
        Header: 'Kierunek',
        accessor: 'homeworkPoints'
      },
      {
        Header: 'Nieobecności',
        accessor: 'absenceCounter'
      },
      {
        Header: 'Suma',
        accessor: 'allPoints',
        Cell: (e) => <TableStyles.StyledBold>{e.value}</TableStyles.StyledBold>
      },
      {
        Header: 'Szczegóły',
        id: 'redirect',
        Cell: ({ row: { values } }) => {
          return (
            <Link to={`/student/${values.index}`}>
              <TableStyles.StyledArrowIcon />
            </Link>
          );
        }
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

StandardTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default StandardTable;
