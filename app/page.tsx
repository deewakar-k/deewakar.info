import React from 'react';
import Art from "./ui/art";
import { Connect } from './ui/connect';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <section>
        <h1>hi, i'm deewakar</h1>
        <p className="text-details text-md flex items-center gap-1">
          <span>crafting</span> <a href="https://march.cat/" target="_blank" className="clickable text-black">march</a>
        </p>
      </section>
      <section className="flex flex-col gap-3 mt-8">
        <span>
          I'm a full stack developer and student passionate about computer science and building high-quality web apps.
        </span>
        <span>
          I focus on delivering exceptional user experiences, adapting to the needs of each project with ease—whether it's Next.js or React, or whatever fits best.
        </span>
        <span>
          I work with a variety of programming languages, including<span className=" font-bold"> TypeScript</span>, C,<span className="font-bold"> Rust</span>, and Python.
        </span>
      </section>
      <section className="flex justify-center items-center">
        <div className="border border-black p-2">
          <Art />
        </div>
      </section>
      <section>
        <h1>march</h1>
        <span className='text-details'>SDE Intern, Sep 2024 - Now</span>
      </section>
      <section>
        <p className='font-medium'>connect</p>
        <Connect />
        <Image src='/videos/coke.gif' alt='coke img' width={25} height={54} />
      </section>
    </main>
  )
}
