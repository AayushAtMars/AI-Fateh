import BlurredInfiniteSlider from "./BlurInfiniteSlider";

const LOGOS = [
                { src: "https://logos-download.com/wp-content/uploads/2016/07/Jio_logo.png", alt: "OpenAI Logo", height: 44 },
                { src: "https://i.pinimg.com/736x/b7/18/e4/b718e41616355ec689f5a55e8b3ca990.jpg", alt: "Amazon Logo", height: 44 },
                { src: "https://www.greatplacetowork.in/great/api/assets/uploads/12485/logo/logo.png", alt: "Column Logo", height: 26 },
                { src: "https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=auto/https://assets.about.me/background/users/p/i/s/pisoft_1670827311_963.jpg", alt: "GitHub Logo", height: 44 },
                { src: "https://logosmarken.com/wp-content/uploads/2022/01/Nagarro-Logo.png", alt: "Naggaro Logo", height: 50 },
                { src: "https://i.pinimg.com/1200x/c2/98/5e/c2985e50b1c7d8f3c4ff6bd9d6e185bf.jpg", alt: "Infosys Logo", height: 40 },
                { src: "https://i.pinimg.com/1200x/03/1a/b1/031ab1329da9a72190cacb119eed906a.jpg", alt: "Wipro Logo", height: 40 },
                { src: "https://i.pinimg.com/736x/e6/f3/52/e6f352ff7fdb2fc673207c45cae14769.jpg", alt: "Google Logo", height: 40 },
                { src: "https://thewealthmosaic.s3.amazonaws.com/media/Logo_HCL_Technologies.png", alt: " HCL Logo", height: 40 },
];

export default function LogoCloudDemo() {
  return (
    <section className="w-full py-16 overflow-hidden bg-background">
      <div className="p-1 mx-auto max-w-7xl">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex-shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-gray-600 dark:md:border-gray-900 md:pr-6">
            <p className="text-sm text-gray-900 dark:text-gray-900">
              Powering the best Companies In Campus
            </p>
          </div>
          <div className="w-full py-6 md:w-full md:flex-1">
            <BlurredInfiniteSlider speedOnHover={20} speed={40} gap={112} fadeWidth={80}>
              {LOGOS.map((logo) => (
                <div key={logo.src} className="flex">
                  <img
                    className="mx-auto w-fit"
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: `${logo.height}px` }}
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
