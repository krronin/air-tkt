export default function HotelsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section className="w-full flex max-w-7xl p-6 lg:px-8">
        {children}
      </section>
    );
  }
  