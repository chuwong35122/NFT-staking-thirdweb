import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

function Mint() {
  const router = useRouter();
  const address = useAddress();

  const connectWithMetamask = useMetamask();

  const nftDropContract = useNFTDrop(
    "0xf60D521b9364c6116513e843A53994FA4b5b0F9c"
  );

  async function claimNFT() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT claimed");
      router.push("/stake");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={styles.container}>
      {!address ? (
        <button
          className={`${styles.mainButton} ${styles.spaceBottom}`}
          onClick={connectWithMetamask}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          className={`${styles.mainButton} ${styles.spaceBottom}`}
          onClick={claimNFT}
        >
          Claim NFT
        </button>
      )}
    </div>
  );
}

export default Mint;
