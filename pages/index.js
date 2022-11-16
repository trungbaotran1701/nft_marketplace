import Link from "next/link";
import { MainLayout } from "../components/ui/layout";
import { useWeb3 } from "../components/ui/provider";

export default function Home() {
  const { isLoading, provider, ethereum } = useWeb3();

  console.log("provider", provider);
  console.log("ethereum", ethereum);
  console.log("isLoading", isLoading);

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
