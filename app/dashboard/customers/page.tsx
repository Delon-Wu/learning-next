import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Customer',
  };
}

export default function page() {
  return <p>Customers Page</p>
}