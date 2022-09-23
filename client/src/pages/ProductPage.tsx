import { ProductHeader } from "../components/productHeader/ProductHeader";
import { Specifications } from "../components/specifications/Specifications";
import { OtherViewedLaptops } from "../components/otherViewedLaptops/OtherViewedLaptops";
import { Reviews } from "../components/reviews/Reviews";
import { DeliveryWarrantyEmpty } from "../components/deliveryWarrantyEmpty/DeliveryWarrantyEmpty";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";

export const ProductPage: React.FC = () => {
  return (
    <div>
      <ProductHeader />
      <Specifications />
      <OtherViewedLaptops />
      <Carousel />
      <Reviews />
      <DeliveryWarrantyEmpty />
      <Footer />
    </div>
  );
};
