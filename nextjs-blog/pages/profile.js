import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

export default function Porfile() {
    return (
        <Layout>
            <h1>Profile</h1>
            <Image
                src="/images/profile.jpg" // 프로필 사진 경로
                height={400}
                width={400}
                alt="Moon & Star"
            />
            <h2>
                <Link href="/">
                    Home
                </Link>
            </h2>
      </Layout>
    )
  }