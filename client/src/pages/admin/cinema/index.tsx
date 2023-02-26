import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useMemo } from 'react';
import styled from './cinema.module.scss';

interface Person {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
}

const data: Person[] = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
];

function CinemaAdmin(): JSX.Element {
  const columns = useMemo<Array<MRT_ColumnDef<Person>>>(
    () => [
      {
        accessorKey: 'name.firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    []
  );
  return (
    <div className={styled.cinema}>
      <div className={styled.cinema__container}>
        <div className={styled.cinema__container__title}>
          <div className={styled.cinema__container__title__col}>
            <div>
              <h2>Cinemas</h2>
            </div>
          </div>
        </div>
        <div className={styled.cinema__container__body}>
          <MaterialReactTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default CinemaAdmin;
