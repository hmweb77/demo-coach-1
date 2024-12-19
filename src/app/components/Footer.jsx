'use client';

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary">
              Transform
            </Link>
            <p className="mt-4 text-gray-600">
              Empowering individuals to break through limitations and achieve their full potential.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#process" className="text-gray-600 hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>contact@transform.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Breakthrough Street</li>
              <li>Success City, SC 12345</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Transform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}