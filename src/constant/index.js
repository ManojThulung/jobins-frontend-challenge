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
    rate: "25.8%",
  },
  {
    name: "Brazil",
    image: BrFlag,
    totalNumber: "26k",
    isIncrease: false,
    rate: "16.2%",
  },
  {
    name: "Australia",
    image: AuFlag,
    totalNumber: "17k",
    isIncrease: false,
    rate: "11.9%",
  },
];
