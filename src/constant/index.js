import { AuFlag, BrFlag, USFlag } from "../assets/image";

export const NotificationList = [
  {
    title: "New Order Received",
    description:
      "You have a new order from customer #12345. Check the details and process it soon.",
    time: "3 min ago",
  },
  {
    title: "Low Stock Alert",
    description:
      "The stock for product Wireless Headphones is running low. Only 5 items left in inventory.",
    time: "3 hour ago",
  },
  {
    title: "Payment Received",
    description:
      "A payment of $250 has been received from customer #98765 for Order #65432.",
    time: "12 hour ago",
  },
  {
    title: "New User Registered",
    description:
      "A new user, John Doe, has registered on the platform. Welcome them and review their profile.",
    time: "1 day ago",
  },
];

export const TotalSalesReprot = [
  {
    title: "Total Sales & Costs",
    period: "Last 7 days",
    cost: "$350K",
    rate: "8.56K",
  },
];

export const TotalProfitReprot = [
  { title: "Total Profit", period: "Last 7 days", cost: "50K", rate: "12%" },
];

export const CountriesReport = [
  {
    name: "United States",
    image: USFlag,
    totalNumber: "30k",
    isIncrease: true,
    rate: 25.8,
  },
  {
    name: "Brazil",
    image: BrFlag,
    totalNumber: "26k",
    isIncrease: false,
    rate: 16.2,
  },
  {
    name: "Australia",
    image: AuFlag,
    totalNumber: "17k",
    isIncrease: false,
    rate: 11.9,
  },
];

export const CustomerDetail = {
  name: "Robert Fox",
  email: "robert@gmail.com",
  personal_info: {
    contact_no: "(201) 555-0124",
    dob: "1 Jan, 1985",
    join_member_date: "3 March, 2023",
  },
  shipping_address: "3517 W. Gray St. Utica, Pennsylvania 57867",
  order_detail: {
    total_order: 150,
    completed: 140,
    canceled: 10,
  },
};

export const StatusOptions = [
  { id: 1, name: "All Orders" },
  { id: 2, name: "Completed" },
  { id: 3, name: "Canceled" },
];

export const OrderTableHeader = [
  "ID",
  "Customer",
  "date",
  "total",
  "method",
  "status",
  "action",
];

export const OrderList = [
  {
    id: "#ORD001",
    customer: "John Doe",
    date: "2024-09-28",
    total: "$150.00",
    method: "Credit Card",
    status: "Completed",
    action: "View Details",
  },
  {
    id: "#ORD002",
    customer: "Jane Smith",
    date: "2024-09-27",
    total: "$250.00",
    method: "PayPal",
    status: "Canceled",
    action: "View Details",
  },
  {
    id: "#ORD003",
    customer: "Michael Johnson",
    date: "2024-09-26",
    total: "$75.00",
    method: "Bank Transfer",
    status: "Canceled",
    action: "View Details",
  },
  {
    id: "#ORD004",
    customer: "Emily Davis",
    date: "2024-09-25",
    total: "$300.00",
    method: "Cash on Delivery",
    status: "Completed",
    action: "View Details",
  },
  {
    id: "#ORD005",
    customer: "David Wilson",
    date: "2024-09-24",
    total: "$500.00",
    method: "Credit Card",
    status: "Canceled",
    action: "View Details",
  },
];
