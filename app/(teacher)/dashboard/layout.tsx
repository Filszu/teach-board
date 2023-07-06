import { Navabar } from "@/components";
import styles from './page.module.css'
import AuthProvider from "@/app/AuthProvider";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <AuthProvider>
          <div className={styles.container}>
              <h1 className={styles.title}>TeachBoard</h1>
              <Navabar />
              <main className={styles.panelContainer}>
                  {children}
              </main>
          </div>
      </AuthProvider>
    );
  }