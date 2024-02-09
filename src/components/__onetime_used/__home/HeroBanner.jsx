import Image from "next/image";
import HeroBannerImg from "@/assets/hero-banner.jpg";
import PcBuilderAnimatedButton from "@/components/__shared_multiple_time/__buttons/__PcBuilderAnimatedButton";

const HeroBanner = () => {
  return (
    <div className="grid grid-cols-12 gap-x-10 items-center">
      <div className="col-span-8">
        <Image
          src={HeroBannerImg}
          alt="Hero Banner"
          width={500}
          height={700}
          className="w-full h-full"
        />
      </div>
      <div className="w-full col-span-4">
        <h1 className="text-4xl font-semibold">
          GetPc Provide You Best Quality Computer Accessories.
        </h1>
        <div className="mt-10">
          <PcBuilderAnimatedButton />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
