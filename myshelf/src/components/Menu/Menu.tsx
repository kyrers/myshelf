import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";

export default function Menu() {
  return (
    <div>
      <h1>MyShelf</h1>
      <Web3Button />
      <Web3NetworkSwitch />
    </div>
  );
}
