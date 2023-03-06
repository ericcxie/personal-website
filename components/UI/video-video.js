import React from "react";

const VideoPage = ({ videoname }) => {
  return (
    <div>
      <video controls>
        <source src={`/videos/${videoname}`} type="video/mp4" />
      </video>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  // Fetch data from external API or database
  const { videoname } = params;

  // Pass data to the page via props
  return { props: { videoname } };
}

export default VideoPage;
