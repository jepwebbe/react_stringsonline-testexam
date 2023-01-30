import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appService from "../../App/Appservices/AppService";
import { StyledSidebar } from "./Styled.Sidebar";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const result = await appService.Get("productgroups");
        setCategories(result.data.items);
        console.log(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  return (
    <StyledSidebar>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        <li>Brands</li>
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
