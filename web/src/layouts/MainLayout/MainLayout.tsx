type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <p>header</p>
      {children}
      <p>footer</p>
    </>
  )
}

export default MainLayout
