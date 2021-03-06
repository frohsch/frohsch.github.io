import Image from "next/image";
import Head from "next/head";
import metadata from "../data/metadata";
import Link from "next/link";
import Footer from "./Footer";

import Nav from "./Nav";

const Container = (props) => {
  const meta = {
    title: metadata.meta.title,
    description: metadata.meta.description,

    image: `${metadata.meta.url}/home/main.jpg`,
    author: metadata.author,
    ...props.customMeta,
  };

  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <Nav />
        <div className={`flex flex-row items-center`}>
          <Link href={"/"}>
          <a>
          <Image
            src={`/logo.jpg`}
            alt="로고"
            width={40}
            height={40}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          
          </a>
          </Link>
        </div>
        
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Container;
