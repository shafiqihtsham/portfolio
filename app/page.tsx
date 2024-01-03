"use client";

import Header from "@/app/components/Header/Header";
import Card from "@/app/components/Card/Card";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <>
      {" "}
      <main className="my-5 text-center w-full p-2 h-full">
        <Header />
        <div>
          <Card title="About Me">
            <article className="text-sm">
              A final-year Software Engineering student. With a solid foundation
              in programming and machine learning, I'm eager to transition my
              skills from academia to the professional realm. I'm passionate
              about problem-solving and innovation, and I'm excited about the
              prospect of contributing to your team. Let's connect and explore
              how my dedication to software engineering can benefit your
              organization.
            </article>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
