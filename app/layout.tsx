import './globals.css'
import Navbar from '../components/navbar/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
		<Navbar></Navbar>
	  	{children}
	</body>
    </html>
  )
}
