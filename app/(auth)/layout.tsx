
const AuthLayout = ({children}:any) => {
  return (
    <div>
        <nav className="bg-red-500 text-white">
            Auth Navbar
        </nav>
        {children}
    </div>
    
  )
}

export default AuthLayout