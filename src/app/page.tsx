"use client"

import { ConnectButton, MediaRenderer, TransactionButton, } from "thirdweb/react"
import { getContractMetadata } from "thirdweb/extensions/common"
import { createThirdwebClient, getContract } from "thirdweb";
import { claimTo } from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { useReadContract } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "a7ff0eb603e6942d48ca89c9ef7e5d05",
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
  chain: teaSepolia, // Pastikan menggunakan chain yang didefinisikan
  address: "0x6943D7f859C379299c763Dbc420e87FD0114f30E",
});


export default function Home() {
  const account = useActiveAccount();

  const { data: contractMetadata } = useReadContract(getContractMetadata, {
    contract: contract
  });


  return (
    <div className="min-h-screen flex flex-col bg-[#0a0711]">
      {/* Top Navigation */}
      <nav className="p-4 flex justify-end mb-3">
        <div className="flex gap-1">
          {/*<Button variant="outline" size="icon" className="rounded-full bg-[#98ff99]/50 border-[#98ff99]">
            <Volume2 className="h-5 w-5 text-[#98ff99]" />
          </Button> */}
          {/* <Button className="bg-[#98ff99/50 text-[#98ff99] border-[#98ff99] hover:bg-[#98ff99/70 hover:text-[#98ff99]/90">
            Connect Wallet
          </Button> */}
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
            {/* <Button variant="outline" size="icon" className="rounded-full bg-[#0a0711]/50 border-[#98ff99]">
              <X className="h-5 w-5 text-[#98ff99]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-[#0a0711]/50 border-[#98ff99]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#98ff99] fill-current">
                <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.767-1.572.2-.075 1.353-.555 2.193-.89 1.735-.67 2.912-1.127 6.25-2.445 4.457-1.725 8.87-3.428 9.335-3.608.23-.088.232-.08.288-.03z" />
              </svg>
            </Button> */}
            
          </div>

          {/* Logo */}
          <div className="w-24 h-24 mx-auto">
            {/*<Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teh.jpg-MvAwyMb1FvNQAhL4At4247ZkWlM9qS.jpeg"
              alt="$PUCUK Logo"
              width={96}
              height={96}
              className="object-contain mint-glow"
            /> */}
                            <MediaRenderer
                client={client}
                src={contractMetadata?.image}
                width="400"
                height="400"
                style={{
                  borderRadius: "1rem",
                  border: "1px solid #98ff99",
                  boxShadow: "3px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                />
          </div>

          <h1 className="drip-text text-6xl text-[#98ff99] font-bold mt-6">$PUCUK</h1>
          <p className="text-lg text-gray-300 max-w-sm mx-auto">
            An infinite Meme community on TEA, for freedom, decentralization, and financial independence!
          </p>
          {/* Main Action Button */}
          {/*<Button className="w-full bg-[#98ff99] text-[#98ff99] hover:bg-[#98ff99]/90 text-lg font-bold py-6 mint-glow">
            CHECK REDEEM AIRDROP
          </Button> */}
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
