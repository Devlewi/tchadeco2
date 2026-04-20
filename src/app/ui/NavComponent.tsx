"use client";

import Link from "next/link";
import { getTranslation } from "../utils/i18n";

type NavComponentProps = {
  locale: string;
};

export default function NavComponent({ locale }: NavComponentProps) {
  const t = getTranslation(locale);
  const categoryPath = t.category || "categorie";

  const menu = t.menu;
  const slugs = t.slugs;

  return (
    <nav className="navigation navigation-main nav-hov-a ">
      <ul id="menu-main-menu" className="menu font-interExtraBold">
        <li className="menu-item">
          <Link href={`/${locale}`} aria-current="page">{menu.home}</Link>
        </li>        

        <li className="menu-item menu-item-has-children">
          <Link href={`/${locale}/${categoryPath}/${slugs.actualite}`} className="">{menu.actualite}</Link>          
        </li>

        <li className="menu-item menu-item-has-children">
          <Link href={`#`}>{menu.secteur}</Link>          
          <ul className="sub-menu">
            <li><Link href={`/${locale}/${categoryPath}/${slugs.agriculture}`} className="font-interMedium">{menu.agriculture}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.banquesetassurances}`} className="font-interMedium">{menu.banquesetassurances}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.btp}`} className="font-interMedium">{menu.btp}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.energie}`} className="font-interMedium">{menu.energie}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.medias}`} className="font-interMedium">{menu.medias}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.mine}`} className="font-interMedium">{menu.mine}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.droitfiscalite}`} className="font-interMedium">{menu.droitfiscalite}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.startup}`} className="font-interMedium">{menu.startup}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.techinoooo}`} className="font-interMedium">{menu.techinoooo}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.public}`} className="font-interMedium">{menu.public}</Link></li>
          </ul>

        </li>

        

        <li className="menu-item">
          <Link href={`/${locale}/${categoryPath}/${slugs.portraits}`}>{menu.portraits}</Link>
        </li>

        <li className="menu-item">
          <Link href={`/${locale}/${categoryPath}/${slugs.analyseopinions}`}>{menu.analyseopinions}</Link>
        </li>
        <li className="menu-item">
          <Link href={`/${locale}/${categoryPath}/${slugs.economie}`}>{menu.economie}</Link>
        </li>
      </ul>
    </nav>
  );
}
