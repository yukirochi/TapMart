import "./../../../src/all.css"
import logo from "../../assets/logo.png"
export default () => {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
    return (
    <footer className="pt-10">
  <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
    <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
      <img src={logo} className="w-32 sm:mx-auto" alt="TapMart Logo" />
      <p>TapMart — Your one and only</p>
    </div>

    <div className="w-full h-[40px]"></div>
  </div>
</footer>

    )
}