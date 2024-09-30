import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <div>
      <div className="bar">
          <Link href="/">게임소식</Link>
          <Link href="/">게임할인</Link>
      </div>
      <div className="bar2">
      <img src="/sky box.png"></img>        
          <Link href="/">신작게임</Link>
          <Link href="/">인기게임</Link>
      </div>
    
    </div>
  );
}

