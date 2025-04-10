import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      {t("title")}
      <Navbar></Navbar>
    </div>
  );
}
