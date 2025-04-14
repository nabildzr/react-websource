import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Container from "./ContainerComponent";

const FooterComponent = () => {
  return (
    <div className="bg-white p-10">
      <Container className=" px-4 ">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-5/12">
            <h3 className="font-bold text-3xl mb-3">Ngoding.</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet
              debitis minus, excepturi assumenda consequatur adipisci labore
              enim? Consequuntur, consectetur?
            </p>
            <div className="mt-4 mb-1 flex items-center">
              <a
                className="flex items-center gap-1 text-gray-600 no-underline"
                href="/"
              >
                <WhatsappLogo size={20}  weight="bold"/>
                <p className="m-0">+62 123-4567-8945</p>
              </a>
            </div>
            <div className="flex items-center">
              <a
                className="flex items-center gap-1 text-gray-600 no-underline"
                href="/"
              >
                <EnvelopeSimple size={20} weight="bold"/>
                <p className="m-0">person-email@gmail.com</p>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/12 mt-5 lg:mt-0">
            <h5 className="font-bold mb-3">Menu</h5>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="/kelas">
                  Kelas
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="/testimonial"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="/faq">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="/syaratketen"
                >
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 mt-5 lg:mt-0">
            <h5 className="font-bold mb-3">Subscribe untuk Info Menarik</h5>
            <div className="flex">
              <input
                type="text"
                placeholder="Subscribe..."
                className="flex-grow px-4 py-2 w-full border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://instagram.com/nabildzr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo
                  weight="fill"
                  size={30}
                  className="hover:text-red-500"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookLogo
                  weight="fill"
                  size={30}
                  className="hover:text-red-500"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterLogo
                  weight="fill"
                  size={30}
                  className="hover:text-red-500"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo
                  weight="fill"
                  size={30}
                  className="hover:text-red-500"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeLogo
                  weight="fill"
                  size={30}
                  className="hover:text-red-500"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-gray-600">
            © Copyright 2025 by <span className="font-bold">Nabildzr</span>, All
            Right Reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FooterComponent;
