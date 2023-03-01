import { Box } from '@mui/material';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import React, { useState, useEffect, useMemo } from 'react';
import backImg from '../../../images/coming/jake-hills-194864.jpg';
import type ISales from '../../../interfaces/sales';
import { salesGetById } from '../../../services/sales';
import styled from './orders.module.scss';

function Orders(): JSX.Element {
  const [orders, setOrders] = useState<ISales[]>([]);

  useEffect(() => {
    void salesGetById().then((res) => {
      console.log(res);
      setOrders(res.data.data);
    });
  }, []);

  const columns = useMemo<Array<MRT_ColumnDef<ISales>>>(
    () => [
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
    <div className={styled.orders}>
      <section className={styled.orders__up}>
        <div className={styled.orders__up__back}>
          <img src={backImg} alt="studio" />
        </div>
        <div className={styled.orders__up__color}></div>
        <div className={styled.orders__up__body}>
          <div className={styled.orders__up__body__content}>
            <div className={styled.orders__up__body__content__container}>
              <div className={styled.orders__up__body__content__container__col}>
                <div className={styled.orders__up__body__content__container__col__ef}>
                  <div className={styled.orders__up__body__content__container__col__ef__inner}>
                    <div className={styled.orders__up__body__content__container__col__ef__inner__wrap}>
                      <div>
                        <h2>My Orders</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <MaterialReactTable columns={columns} data={orders} />
      </section>
    </div>
  );
}

export default Orders;
