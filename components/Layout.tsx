import NavBar from './NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 p-4 bg-gray-50">{children}</main>
      <footer className="bg-blue-500 text-white text-center p-4">
        Copyright &copy; {new Date().getFullYear()} Smida 社区
      </footer>
    </div>
  )
}
