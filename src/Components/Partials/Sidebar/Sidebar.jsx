import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import appService from "../../App/Appservices/AppService";
import { StyledSidebar } from "./Styled.Sidebar";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const result = await appService.Get("productgroups", id);
        setCategories(result.data.items);
        console.log(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, [id]);


  const convertId = (parent_id) => {
    if (parent_id == 1) {
      return "/guitarer/";
    }
    if (parent_id == 5) {
      return "/basser/";
    }
    if (parent_id == 8) {
      return "/andrestrenge/";
    }
    if (parent_id == 9) {
      return "/keyboards/";
    }
  };
  return (
    <StyledSidebar>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>
            <Link
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === item.id ? null : item.id
                )
              }
            >
              {item.title}
            </Link>
            {selectedCategory === item.id && item.subgroups && (
              <ul>
                {item.subgroups.map((subCategory) => (
                  <li key={subCategory.id}>
                    <Link
                      to={convertId(subCategory.parent_id) + subCategory.id}
                    >
                      {subCategory.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
