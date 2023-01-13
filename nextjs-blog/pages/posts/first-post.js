import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function FirstPost() {
  return (
    <>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                Home
            </Link>
        </h2>
    </>
  )
}

