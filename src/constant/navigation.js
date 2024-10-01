import { AddIcon, BoxIcon, CartIcon, HomeIcon, StarIcon } from "../assets/icon";

export const NavbarData = [
  {
    section: "Main Menu",
    child: [
      { name: "Dashboard", path: "/", icon: HomeIcon },
      {
        name: "Order Management",
        path: "/order-management",
        icon: CartIcon,
      },
      { name: "Brand", path: "/brand", icon: StarIcon },
    ],
  },
  {
    section: "Products",
    child: [
      { name: "Add Products", path: "/add-products", icon: AddIcon },
      { name: "Product List", path: "/product-list", icon: BoxIcon },
    ],
  },
];
