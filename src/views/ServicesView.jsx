import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid } from "@material-ui/core";
import Sections from "../modules/Sections";
import SectionSelector from "../components/Section/SectionSelector";

const ServicesView = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Sections.read("services")
      setSections(response);
    };
    fetchPageData();
  }, []);

  const sectionList = sections.map(
    ({ id, header, description, image, buttons }) => {
      return (
        <Grid item key={id}>
          <SectionSelector
            id={id}
            header={header}
            description={description}
            image={image}
            buttons={buttons}
          />
        </Grid>
      );
    }
  );

  return (
    <>
      <Helmet>
        <title>Self Care Services</title>
      </Helmet>
      <Grid container spacing={0} direction="column" alignItems="stretch">
        {sectionList}
      </Grid>
    </>
  );
};

export default ServicesView;
