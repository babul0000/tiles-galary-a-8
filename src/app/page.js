import AutoRun from "@/components/AutoRun";
import Banner from "@/components/Banner";
import CardSection from "@/components/card/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AutoRun/>
      <CardSection/>
    </div>
  );
}
