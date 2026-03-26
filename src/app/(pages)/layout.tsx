import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
