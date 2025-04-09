type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/products", label: "Produtos" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/reviews", label: "Reviews" },
  { href: "/cart", label: "Carrinho" },
  { href: "/orders", label: "Compras" },
  { href: "/admin/sales", label: "dashboard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "vendas" },
  { href: "/admin/products", label: "meus products" },
  { href: "/admin/products/create", label: "criar produto" },
];
