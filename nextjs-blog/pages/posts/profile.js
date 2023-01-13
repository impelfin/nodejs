import Image from "next/image";
import Link from "next/link";

export default function Porfile() {
    return (
        <>
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
      </>
    )
  }