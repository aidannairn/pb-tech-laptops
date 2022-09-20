import { ProductHeader } from "../components/productHeader/ProductHeader";
import { Specifications } from "../components/specifications/Specifications";
import { OtherViewedLaptops } from "../components/otherViewedLaptops/OtherViewedLaptops";
import { Reviews } from "../components/reviews/Reviews";
import { DeliveryWarrantyEmpty } from "../components/deliveryWarrantyEmpty/DeliveryWarrantyEmpty";

export const ProductPage: React.FC = () => {
  return (
    <div>
      <ProductHeader />
      <Specifications />
      <OtherViewedLaptops />
      <Reviews />
      <DeliveryWarrantyEmpty />
    </div>
  );
};
