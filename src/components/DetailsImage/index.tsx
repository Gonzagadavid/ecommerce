import Image from "next/image";
import { StyledDetailsSlider } from "../../styles";
import { sliderDetailsSettings } from "../../constants/sliderSettings";
import { Picture } from "../../types";
import SampleNextArrow from "../SampleNextArrow";
import SamplePrevArrow from "../SamplePrevArrow";

export default function DetailsImage({ pictures }: { pictures: Picture }){
  const settings = {
    customPaging: (i: number) => <a><Image src={pictures[i].url} layout="responsive" width={100} height={100} alt="moster"/></a>,
    ...sliderDetailsSettings,  
    nextArrow: <SampleNextArrow className="string" style={{}} onClick={() =>{}} />,
    prevArrow: <SamplePrevArrow className="string" style={{}} onClick={() =>{}} />,
  };
  return (
    <StyledDetailsSlider {...settings}>
      { pictures.map((picture) => (
        <div key={picture.id}>
          <Image src={picture.url} alt="product" layout="responsive" width={200} height={200} />
        </div>
      )) }
    </StyledDetailsSlider>
  );
}