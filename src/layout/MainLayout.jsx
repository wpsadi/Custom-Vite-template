import { NavbarFB } from "@/flowbite-self/navbar";

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  return (
    <>
      <header>
        <NavbarFB />
      </header>

      <main>{children}</main>
    </>
  );
}
export default MainLayout;
