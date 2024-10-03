import { OrderList } from "../constant";

// get Order list data to dashboard table
export const getOrderList = (status, search) => {
  let sortOrderList = [];
  let searchOrderList = [];

  // filter from status
  if (status === "All Orders") {
    sortOrderList = OrderList;
  } else {
    sortOrderList = OrderList.filter((order) => order.status === status);
  }

  // filter from search
  if (search === "") {
    searchOrderList = sortOrderList;
  } else {
    searchOrderList = sortOrderList.filter(
      (sortOrder) =>
        sortOrder.customer.toLowerCase().includes(search.toLowerCase()) ||
        sortOrder.id.toLowerCase().includes(search.toLowerCase())
    );
  }

  return searchOrderList;
};
