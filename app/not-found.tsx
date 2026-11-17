import Link from "next/link";

export default function NotFound() {
  return (
    <article className="doc" style={{ textAlign: "center" }}>
      <h1>This thought got away.</h1>
      <p className="lead" style={{ margin: "20px auto 0" }}>
        The page you&apos;re looking for doesn&apos;t exist. Good thing the app is better at keeping things.
      </p>
      <p style={{ marginTop: 36 }}>
        <Link className="btn btn-primary" href="/">Back to the home page</Link>
      </p>
    </article>
  );
}
