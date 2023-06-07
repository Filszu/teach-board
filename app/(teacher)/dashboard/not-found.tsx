import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found - 404</h2>
      <p>Could not find requested resource</p>
      <p>
        Back to <Link href="/dashboard">dashboard</Link>😊
      </p>
    </div>
  );
}