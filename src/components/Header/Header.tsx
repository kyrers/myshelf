import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { ButtonsWrapper, HeaderWrapper, NavWrapper } from "./style";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>MyShelf</h1>

      <NavWrapper>
        <Link href="/">Explore</Link>
        <Link href="/library">My Library</Link>
        <Link href="/publish">Publish</Link>
      </NavWrapper>

      <ButtonsWrapper>
        <Web3Button />
        <Web3NetworkSwitch />
      </ButtonsWrapper>
    </HeaderWrapper>
  );
}
