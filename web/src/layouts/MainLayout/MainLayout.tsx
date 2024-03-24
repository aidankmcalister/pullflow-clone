import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="w-full overflow-hidden">
      <Header />
      <section className="mx-6">{children}</section>
      <Footer />
    </section>
  )
}

export default MainLayout
