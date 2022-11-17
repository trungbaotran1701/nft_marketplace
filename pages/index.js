import Link from "next/link";
import { MainLayout } from "../components/ui/layout";
import { useWeb3 } from "../components/ui/provider";

export default function Home() {
  const { contract } = useWeb3();
  console.log(contract);

  const getInfoNFT = async () => {
    console.log(await contract?.name());
    console.log(await contract?.symbol());
  };

  getInfoNFT();

  return (
    <>
      <div className="text-3xl">Home Page</div>
      <Link href="/blog">
        <button>Go to Blog Page</button>
      </Link>
    </>
  );
}

Home.Layout = MainLayout;
