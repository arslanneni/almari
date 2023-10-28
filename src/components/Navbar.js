import Link from "next/link";
import React from "react";
import {scrappedDataService} from "../../services/dataFetching"

export default function Navbar  ()  {


  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="#">
            {`KURTA`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`SHALWAR`}
          </Link>
          <Link className="navbar__link relative" href="#">
            SHOES
          </Link>
          <Link className="navbar__link relative" href="#">
            JEWELRY
          </Link>
          <Link className="navbar__link relative" href="#">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
};

