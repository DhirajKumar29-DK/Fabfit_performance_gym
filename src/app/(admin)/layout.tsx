import type { Metadata } from "next";
import AdminLayout from "@/components/layout/AdminLayout";

export const metadata: Metadata = {
  title: "FabFit Performance Gym - Admin",
  description: "FabFit Performance Gym Admin Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}

