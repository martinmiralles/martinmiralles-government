import { Link, Outlet } from "react-router-dom";
import { getTestRoutes } from "../../data";
// import {ServicesAnd} from '../../pages'

const ServicesAndPayments = () => {
  // Make an API call to a Menu Category clicked
  let testRoutes = getTestRoutes();
  return (
    <>
      <h1>Services & Payments</h1>
      {testRoutes.map((testRoute) => (
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/services-payments/${testRoute.slug}/`}
          key={testRoute.name}
        >
          {testRoute.name}
        </Link>
      ))}
      <Outlet />
    </>
  );
};

export default ServicesAndPayments;
