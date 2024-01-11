"use client";

export default function Home() {
  // make the text slide animation where it says full stack development
  //add link to blog where it says blog.
  return (
    <main className="p-4 m-4 min-h-screen">
      <div className="text-center">
        {/* You can add any content specific to the center section */}
      </div>

      <div className="m-2 mt-4">
        <span className="text-3xl font-light">
          Hi, I'm Eddy, formally known as Ihtsham Shafiq. A current UTS student
          and aspiring Software Engineer experienced in full-stack development.
        </span>
      </div>

      <section className="mt-6">
        <h3 className="text-4xl font-bold">Tools I've Used</h3>
        <ul className="text-lg list-inside list-disc mt-2">
          <li>Docker</li>
          <li>Git/Github</li>
          <li>Visual Studio Code, Vim</li>
          <li>ReactJS, ExpressJS, VueJS</li>
          <li>GraphQL, MongoDB, mySQL</li>
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-4xl font-bold">Background</h3>
        <div className="p-4 text-lg">
          I'm in my final year at UTS, majoring in Software Engineering with a
          focus on Data Analytics. Passionate about experimenting with new
          things, I love discovering unique food spots and diving into fresh
          JavaScript frameworks. Beyond programming, you'll find me enjoying
          hobbies like Bouldering, Table Tennis, and Badminton. Check out my
          blog for more!
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-4xl font-bold">Days I Code</h3>
        <div className="p-4 text-lg">
          I'm in my final year at UTS, majoring in Software Engineering with a
          focus on Data Analytics. Passionate about experimenting with new
          things, I love discovering unique food spots and diving into fresh
          JavaScript frameworks. Beyond programming, you'll find me enjoying
          hobbies like Bouldering, Table Tennis, and Badminton. Check out my
          blog for more!
        </div>
      </section>
    </main>
  );
}
