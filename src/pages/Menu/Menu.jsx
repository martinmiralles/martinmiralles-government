import { Link, useLocation, useParams } from "react-router-dom";
import { getTestRoutes } from "../../data";

const Menu = () => {
  const location = useLocation();
  const params = useParams();

  let testRoutes = getTestRoutes();
  console.log(location);
  console.log(params);

  return (
    <div>
      {/* {location.pathname} */}
      {params.menuId}
      <h1>Services & Payments</h1>
      {testRoutes.map((testRoute) => (
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`${location.pathname}/${testRoute.slug}/`}
          key={testRoute.name}
        >
          {testRoute.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
