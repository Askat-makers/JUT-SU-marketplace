import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";

function BasketPage() {
  const { basketWatches, getWatchesFromBasket } =
    React.useContext(ClientContext);

  React.useEffect(() => {
    getWatchesFromBasket();
  }, []);

  if (!basketWatches) {
    return (
      <div className="basket-page">
        <Container>
          <h2>Корзина пока пуста</h2>
        </Container>
      </div>
    );
  }

  return (
    <div className="basket-page">
      <Container>
        <h2>Корзина</h2>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Название:</TableCell>
              <TableCell>Фото</TableCell>
              <TableCell>Цена:</TableCell>
              <TableCell>Кол-во</TableCell>
              <TableCell>Сумма:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basketWatches.products.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <img width={60} src={item.photo} alt="" />
                </TableCell>
                <TableCell>{item.price} сом</TableCell>
                <TableCell>{item.count}</TableCell>
                <TableCell>{item.subPrice} сом</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Итоговая сумма:</TableCell>
              <TableCell colSpan={1}>{basketWatches.totalPrice} сом</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Container>
    </div>
  );
}

export default BasketPage;
