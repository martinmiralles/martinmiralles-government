import { useParams } from "react-router-dom";

const ServicesAndPayments_Category = () => {
  // Must fetch the categories of the "Services & Payments" option selected
  let params = useParams();
  return <h2>Category: {params.subMenuId}</h2>;
};

export default ServicesAndPayments_Category;
