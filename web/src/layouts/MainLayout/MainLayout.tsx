import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="w-full overflow-hidden">
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default MainLayout
