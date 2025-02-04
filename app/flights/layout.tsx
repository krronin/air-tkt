export default function FlightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full flex p-6 lg:px-8">
      {children}
    </section>
  );
}
