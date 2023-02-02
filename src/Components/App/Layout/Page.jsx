import { useEffect } from "react";

const Page = (props) => {
  const { children, title, description, subtitle } = props;

  useEffect(() => {
    document.title = title;
    if (description) {
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <>
      <ContentWrapper> {children} </ContentWrapper>
    </>
  );
};

const ContentWrapper = (props) => {
  return <div className="container">{props.children}</div>;
};

export { Page, ContentWrapper };
