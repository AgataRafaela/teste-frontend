import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <div className="logoContainer">
        <Image
          src="/logo.png"
          alt="Positivus logo"
          width={220}
          height={36}
        />
      </div>
      <ul className="navLinks">
        <li><Link href="#about">About us</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#use-cases">Use Cases</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="#blog">Blog</Link></li>
        <li><Link href="#quote">Request a quote</Link></li>
      </ul>
    </nav>
  );
}
