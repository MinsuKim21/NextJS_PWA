export default function Blog() {
  return (
    <main className="pt-20 flex flex-col space-y-10 justify-around px-20 h-full">
      <iframe
        src="https://velog.io/tags"
        height="600"
        sandbox=""
        seamless
        className="overflow-y-hidden"
      />
    </main>
  )
}
