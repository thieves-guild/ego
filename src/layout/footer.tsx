import { footerOnHover } from "../assets/styles"

const Footer = () => {
  return (
    <div className="w-full text-neutral-500 text-right space-x-4 p-12">
      <a className={footerOnHover} href="">Github</a>
      <a className={footerOnHover} href="">Twitter</a>
      <a className={footerOnHover} href="">Linkedin</a>
    </div>
  )
}

export default Footer