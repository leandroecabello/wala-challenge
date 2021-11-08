import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const SingleCard = () => {
  return (
    <CardContainer>
      <Card>
        <CardContent>
          <Typography>TEXTO</Typography>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default SingleCard;
