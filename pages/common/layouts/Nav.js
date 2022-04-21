import Link from "next/link";

export default function Nav(){
  return (
    <nav>
      <ul>
        <li><Link href='/'>메인</Link> </li>
        <li><Link href='/board/list'>게시글목록</Link> </li>
        <li><Link href='/user/join'>회원가입</Link> </li>
        <li><Link href='/user/login'>로그인</Link> </li>
      </ul>
    </nav>
  );
}

