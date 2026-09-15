import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vincent-portfolio-alpha.vercel.app"),
  title: {
    default:
      "Vincent Mulonzi — IT Professional & Cybersecurity Practitioner | Nairobi",
    template: "%s | Vincent Mulonzi",
  },
  description:
    "Vincent Mulonzi is a full-stack developer and TVET CDACC-recognised Cybersecurity Assessment Verifier based in Nairobi, Kenya. Secure web apps, ICT support, KDPA & ISO 27001 compliance.",
  keywords: [
    "Vincent Mulonzi",
    "Vincent Usungio Mulonzi",
    "IT professional Nairobi",
    "cybersecurity Kenya",
    "KDPA compliance consultant",
    "ISO 27001 Kenya",
    "freelance developer Nairobi",
    "TVET CDACC verifier",
    "Next.js developer Kenya",
  ],
  authors: [{ name: "Vincent Usungio Mulonzi" }],
  creator: "Vincent Usungio Mulonzi",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://vincent-portfolio-alpha.vercel.app",
    title: "Vincent Mulonzi — IT Professional & Cybersecurity Practitioner",
    description:
      "Full-stack developer and TVET CDACC-recognised Cybersecurity Assessment Verifier. Secure systems, fast interfaces, real results.",
    siteName: "Vincent Mulonzi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Mulonzi — IT Professional & Cybersecurity Practitioner",
    description:
      "Full-stack developer and Cybersecurity Assessment Verifier based in Nairobi, Kenya.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "zwqlgb2G1tBwe1iMEXFDcm0VtGlYsoBKLyYP30KvVkU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}