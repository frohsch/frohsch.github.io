export async function getServerSideProps(context) {
  const workers = process.env.NEXT_PUBLIC_WORKERS
  const res = await fetch(encodeURI(`${workers}/guestbook`))
  const data = await res.json()
  const list = Object.keys(data).sort().reverse()
  return {
    props: { list, data },
  }
}