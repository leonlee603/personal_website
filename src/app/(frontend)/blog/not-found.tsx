export const metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-row items-center justify-center">
      <main className="px-8">
        <section className="container mx-auto max-w-1248 flex flex-col items-center">
          <div className="text-xl font-semibold md:text-2xl lg:text-4xl">
            404
          </div>
          <div>Not found</div>
        </section>
      </main>
    </div>
  );
}
