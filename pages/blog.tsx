import type { NextPage } from "next";
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import metadata from '../data/metadata'
import Title from '../components/Title'

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const customMeta = {
    title: `Blog - ${metadata.meta.title}`,
    description: '기록하고 싶은 것들...',
  }
  return (
    
    <Container customMeta={customMeta}>
      <>
      <Title title="Blog" des={customMeta.description} />
      </>
      <div className={`mt-10 flex flex-col`}>
        
        {posts.map((post) => (
          <BlogPost
            title={post.title}
            des={post.description}
            date={post.date}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;