type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/products", label: "Produtos" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
];
