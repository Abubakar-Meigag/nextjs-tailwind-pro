import Link from 'next/link'
import React from 'react'



const NavBar = () => {
  return (
    <div className="hidden md:block">
      <div className="container">
        <div className="flex text-blackish w-fit gap-10 mx-auto font-medium py-4">
          <Link className="navbar__link relative" href="/">
            HOME
          </Link>
          <Link className="navbar__link relative" href="/Categories">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="/Men">
            MEN
          </Link>
          <Link className="navbar__link relative" href="/Women">
            WOMEN
          </Link>
          <Link className="navbar__link relative" href="/Jewelry">
            JEWELRY
          </Link>
          <Link className="navbar__link relative" href="/Perfume">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="/Blog">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="/HotOffers">
            OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar