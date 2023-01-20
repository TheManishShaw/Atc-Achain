import { Navbar } from "flowbite-react";
import React from "react";
import { navItems } from "../staticItems/navItems";
import { NavBarStarIcon } from "../../../public/assets/icons/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import CommonBtn from "../Button/CommonBtn";

const NavBar = () => {
  const router = useRouter();

  return (
    <Navbar
      fluid={false}
      className="dark:bg-gray-200 text-transparent sticky top-0  z-20 shadow-md rounded-b-[30px] rounded-t-none overflow-hidden"
    >
      <Navbar className="">
        <Link href={"/"}>
          <img
            src="/assets/images/logo/Logo-dark.png"
            className="mr-3 h-14 sm:h-14"
            alt="ATC Chain India"
          />
        </Link>
      </Navbar>
      <div className="flex md:order-2 gap-4 items-center">
        <span className="text-primary p-2  rounded-full hover:bg-btn-secondary bg-btn-primary hidden xl:block lg:hidden">
          <NavBarStarIcon color={`#fff`} />
        </span>
        <Link href="/contact">
          <CommonBtn
            name={"Contact Us"}
            customClasses={
              "text-white py-2 px-4 bg-btn-primary rounded-lg border"
            }
          />
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navItems.map((item, i) => (
          <Navbar key={i}>
            <Link href={item?.href} as={item?.href}>
              <h1
                className={` bg-transparent hover:text-text-primary  font-semibold ${
                  router.pathname == item?.href
                    ? "font-bold text-primary"
                    : "text-text-gray "
                } `}
              >
                {item?.name}
              </h1>
            </Link>
          </Navbar>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
