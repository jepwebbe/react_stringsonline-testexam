import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUrl } from "../../../Hooks/Slug/useUrl";
import appService from "../../App/Appservices/AppService";
import { StyledSidebar, StyledSidebarButton } from "./Styled.Sidebar";
import slugify from "slugify";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { setUrl } = useUrl();
  const [menuVisible, setMenuVisible] = useState(window.innerWidth >= 768);

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const result = await appService.Get("productgroups");
        for (const parent of result.data.items) {
          for (const child of parent.subgroups) {
            child.slug = slugify(child.title, {
              strict: true,
              lower: true,
              locale: "da",
            });
          }
        }
        setCategories(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);
  
  const convertId = (parent_id) => {
    if (parent_id === "1") {
      return "/guitarer/";
    }
    if (parent_id === "5") {
      return "/basser/";
    }
    if (parent_id === "8") {
      return "/andrestrenge/";
    }
    if (parent_id === "9") {
      return "/keyboards/";
    }
  };
  return (
    <StyledSidebar>
      <StyledSidebarButton onClick={toggleMenuVisibility}>
        Kategorier
      </StyledSidebarButton>
      <div
        className="categoriesBox"
        style={{ display: menuVisible ? "block" : "none" }}
      >
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
                        onClick={() => setUrl(subCategory.request.url)}
                        to={convertId(subCategory.parent_id) + subCategory.slug}
                      >
                        {subCategory.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link to="/brands">Brands</Link>
          </li>
        </ul>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
