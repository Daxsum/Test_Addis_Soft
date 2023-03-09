import React from "react";
import { Link } from "react-router-dom";

import { Box, Card, Image, Heading, Text } from "rebass";
const SongCard = ({ song }) => {
  const { _id, title, artist, filePath } = song;
  const detailLink = "/detail/" + _id;
  return (
    <div className="song-section">
      <Link to={detailLink} key={_id}>
        <Box width={256} key={_id}>
          <Card
            sx={{
              p: 1,
              borderRadius: 2,
              boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
            }}
          >
            <Image
              src={`${process.env.REACT_APP_BASE_URL}/${filePath}`}
              alt={artist}
            />
            <Box px={2}>
              <Heading as="h3">{title}</Heading>
              <Text fontSize={0}>from {artist}</Text>
            </Box>
          </Card>
        </Box>
      </Link>
    </div>
  );
};

export default SongCard;
