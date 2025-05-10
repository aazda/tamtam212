"use client"

import { ConnectButton, TransactionButton, } from "thirdweb/react"
import { createThirdwebClient, getContract } from "thirdweb";
import { claimTo } from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import Image from "next/image";

const client = createThirdwebClient({
  clientId: "your client id",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

const teaSepolia = {
  id: 10218,
  name: "Tea Sepolia",
  nativeCurrency: {
    name: "Tea Sepolia",
    symbol: "TEA",
    decimals: 18,
  },
  rpc: "https://tea-sepolia.g.alchemy.com/public",
  rpcUrls: ["https://tea-sepolia.g.alchemy.com/public"],
  blockExplorers: [{ name: "Tea Explorer", url: "https://sepolia.tea.xyz/" }],
};

const contract = getContract({
  client,
  chain: teaSepolia, 
  address: "0x6943D7f859C379299c763Dbc420e87FD0114f30E",
});


export default function Home() {
  const account = useActiveAccount();

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0711]">
      {/* Top Navigation */}
      <nav className="p-4 flex justify-end mb-3">
        <div className="flex gap-1">
          <ConnectButton 
            client={client}
            wallets={wallets}
            connectModal={{
            size: "compact",
            showThirdwebBranding: false,
            }}
          />
        </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 mb-10">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-6">
            
          </div>

          {/* Logo */}
          <div className="w-24 h-24 mx-auto">
          <Image
  src="/pucuk.jpg"
  alt="$PUCUK Logo"
  width={96}
  height={96}
  className="object-contain rounded-xl border border-[#0a0711] shadow-md"
/>
          </div>

          <h1 className="drip-text text-6xl text-[#98ff99] font-bold mt-6">$PUCUK</h1>
          <p className="text-lg text-gray-300 max-w-sm mx-auto">
            An infinite Meme community on TEA, for freedom, decentralization, and financial independence!
          </p>

          <TransactionButton
                      className="bg-[#98ff99] hover:bg-[#98ff99]/80"
                      transaction={() => claimTo({
                       contract:contract,
                       to: account?.address as string,
                       quantity: ("3000")
                    })}
                    onTransactionConfirmed={async () => alert("Transaction Confirmed")}
                  >
                    CLAIM AIRDROP
                    </TransactionButton>
          <div className="text-sm text-gray-400">Connect Your TEA Chain Address and Claim 3000 $PUCUK Tokens</div> 
          {/* Generate Code Section */}
          <div className="mt-3">
            <h2 className="drip-text text-2xl text-[#98ff99] font-bold mb-3">PUCUK PUCUK PUCUK PUCUK</h2>
            <p className="text-gray-300">RASA TEH TERBAIK ADA DI PUCUKNYA</p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="py-2 text-center text-gray-400">
        <p className="flex items-center justify-center gap-1">
          © 2025 Built with
          <span className="text-[#98ff99]">❤️</span>
          by
          <a 
            className="text-[#98ff99] hover:text-[#98ff99]/80"
          >
            Aazda
          </a>
        </p>
      </footer>
    </div>
  )
}
