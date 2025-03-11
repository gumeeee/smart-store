import Container from "../global/container";
import CartButton from "./cart-button";
import DarkMode from "./dark-mode";
import LinksDropdown from "./links-dropdown";
import Logo from "./logo";
import NavSearch from "./nav-search";
import { Suspense } from "react";

export default function NavBar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 flex-wrap py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
