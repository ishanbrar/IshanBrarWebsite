import { GiftField } from "@/components/GiftField";
import { QuoteTicker } from "@/components/QuoteTicker";
import { VantaFog } from "@/components/VantaFog";

export default function Home() {
  return (
    <main className="relative">
      <VantaFog />
      <GiftField />
      <QuoteTicker />
    </main>
  );
}
