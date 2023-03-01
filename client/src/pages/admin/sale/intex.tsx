import { Box } from '@mui/material';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useMemo, useState, useEffect } from 'react';
import type ISales from '../../../interfaces/sales';
import { salesGetAll } from '../../../services/sales';
import styled from './sale.module.scss';

function Sale(): JSX.Element {
  const [sales, setSales] = useState<ISales[]>([]);

  useEffect(() => {
    void salesGetAll().then((res) => {
      setSales(res.data);
    });
  }, []);

  const columns = useMemo<Array<MRT_ColumnDef<ISales>>>(
    () => [
      {
        accessorKey: 'userId',
        header: 'User ID',
      },
      {
        accessorKey: 'movie',
        header: 'Movie',
      },
      {
        accessorFn: (row) => row.date,
        id: 'date',
        header: 'Buy date',
        /* eslint-disable react/prop-types */
        Cell: ({ cell }) => <Box component="span">{new Date(cell.getValue<string>()).toLocaleTimeString()}</Box>,
      },
      {
        accessorFn: (row) => row.movieDate,
        id: 'movieDate',
        header: 'Movie Date',
        /* eslint-disable react/prop-types */
        Cell: ({ cell }) => <Box component="span">{new Date(cell.getValue<string>()).toLocaleTimeString()}</Box>,
      },
      {
        accessorFn: (row) => row.language,
        id: 'hall',
        header: 'Hall',
      },
      {
        accessorFn: (row) => row.price,
        id: 'price',
        header: 'Price',
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        /* eslint-disable react/prop-types */
        Cell: ({ cell }) => <Box component="span">{cell.getValue<number>()} AZN</Box>,
      },
    ],
    []
  );
  return (
    <div className={styled.sale}>
      <div className={styled.sale__container}>
        <div className={styled.sale__container__title}>
          <div className={styled.sale__container__title__col}>
            <div>
              <h2>Sales</h2>
            </div>
          </div>
        </div>
        <div className={styled.sale__container__body}>
          <MaterialReactTable columns={columns} data={sales} />
        </div>
      </div>
    </div>
  );
}

export default Sale;
