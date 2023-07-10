import NewsLetterForm from "@/components/news-letter-form";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6 pt-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex flex-col items-center gap-4 text-center max-w-[64rem]">
        <div className="flex gap-2">
          <Link
            href="https://twitter.com/___jeferson_"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Twitter
          </Link>
          <Link
            href="https://instagram.com/jeferson.mesquita"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href="https://threads.net/@jeferson.mesquita"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Threads
          </Link>
        </div>
        <h1 className="text-3xl sm:text5xl md:text-6xl lg:text-7xl">
          Conteúdo mais atualizado de Tecnologia Web do YT 🚀 é DeveloperDeck101
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Quer fazer parte desta comunidade e receber as novidades em quanto
          elas são novidades?
        </p>
        <div>
          <NewsLetterForm />
        </div>
      </div>
    </section>
  );
}
