import React from 'react'
import githubMark from '../assets/github-mark.png';
import linkedln from '../assets/linkedln.png';
import mail_logo from '../assets/mail_logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <Link href='/'>
        <span>e-you</span>Tube
        </Link>
      </div>
      <div className="contact">
        <div className="icon-wrapper">
        <a target="_blank" href="https://github.com/emreunsal1">
            <Image src={githubMark}></Image>
          </a>
        </div>
        <div className="icon-wrapper">
        <a target="_blank" href="https://www.linkedin.com/in/emreunsal111/">
            <Image src={linkedln}></Image>
          </a>
        </div>
        <div className="icon-wrapper">
        <a target="_blank" href="mailto:unsalemre111@gmail.com">
            <Image src={mail_logo}></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
