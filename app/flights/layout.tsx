export default function FlightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto flex max-w-7xl p-6 lg:px-8">
      {children}
    </section>
  );
}
