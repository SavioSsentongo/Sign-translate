import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import VideoCard from "../Components/Videos/VideoCard";
import { baseURL } from "../Config/config";

function Videos() {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [validated, setValidated] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  const retrieveVideos = () => {
    axios
      .get(`${baseURL}/videos/all-videos`)
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(retrieveVideos, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!videoId) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    navigate(`/equilearn/video/${videoId}`, { replace: false });
  };

  const handleClick = (videoId) => {
    navigate(`/equilearn/video/${videoId}`, { replace: false });
  };

  const handleTranscriptionSubmit = async (e) => {
    e.preventDefault();
    if (!selectedVideo) return;

    setUploading(true);
    setTranscription("");

    const formData = new FormData();
    formData.append("video", selectedVideo);

    try {
      const res = await axios.post(`${baseURL}/videos/transcribe`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTranscription(res.data.transcription || "No transcription available.");
    } catch (error) {
      console.error(error);
      setTranscription("Error transcribing video.");
    }

    setUploading(false);
  };

  const videoList = videos.map((video, index) => (
    <VideoCard key={index} video={video} handleClick={handleClick} />
  ));

  return (
    <div className="container-fluid d-flex flex-column align-items-center px-0">
      {/* HEADER SECTION */}
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "rgba(9,9,121)" }}
      >
        <div className="container my-5">
          <div className="display-5 px-2 text-center">Explore SL Videos!</div>
          <div className="lead text-center">
            Welcome to the SL video section of Equilearn. Create your own public
            or private videos, share with your friends and colleagues or browse
            through the videos created by others and shared with the entire
            community!
          </div>
        </div>
      </div>

      <hr />

      {/* CREATE SECTION */}
      <section id="create-video">
        <div className="container">
          <div className="row my-4">
            <div
              className="col-md-12 d-flex justify-content-center align-items-center"
              style={{ flexDirection: "column" }}
            >
              <div className="h2 section-heading">Create a new video!</div>
              <div className="col-lg-4 divider my-2" />
              <div className="text-center normal-text">
                Create your own video within a few clicks! Provide your content
                via text, speech or file and keep the videos private or share
                them with the entire community!
              </div>
              <Link
                to="/equilearn/create-video"
                className="btn btn-primary mt-4"
              >
                Create your own Video!
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="hor-line" />

      {/* OPEN BY VIDEO ID */}
      <section id="Open-video">
        <div className="container">
          <div className="row mt-3">
            <div
              className="col-md-12 d-flex justify-content-center align-items-center"
              style={{ flexDirection: "column" }}
            >
              <div className="h2 section-heading">Open a video</div>
              <div className="col-lg-4 divider my-2" />
              <div className="text-center normal-text">
                Open a video directly by using the associated video ID!
              </div>
            </div>
          </div>
        </div>
      </section>

      <Row className="container mb-3">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center p-0"
        >
          <Form.Group
            controlId="videoId"
            as={Col}
            xs="12"
            md="7"
            className="my-3"
          >
            <Form.Label>Enter the Video ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter the Video ID here..."
              value={videoId}
              name="title"
              onChange={(e) => setVideoId(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a video Id.
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="my-2">
            Open Video
          </Button>
        </Form>
      </Row>

      <div className="hor-line" />

      {/* TRANSCRIBE VIDEO SECTION */}
      <section id="Transcribe-video" className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="h2 section-heading">Transcribe a Video</div>
            <div className="col-lg-4 divider my-2 mx-auto" />
            <div className="normal-text mb-3">
              Upload a video to automatically generate transcription text.
            </div>

            <Form onSubmit={handleTranscriptionSubmit}>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control
                  type="file"
                  accept="video/*"
                  onChange={(e) => setSelectedVideo(e.target.files[0])}
                />
              </Form.Group>
              <Button type="submit" disabled={uploading || !selectedVideo}>
                {uploading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Transcribing...
                  </>
                ) : (
                  "Transcribe Video"
                )}
              </Button>
            </Form>

            {transcription && (
              <div className="mt-4 text-start">
                <h5>Transcription Result:</h5>
                <pre
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "10px",
                    borderRadius: "8px",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {transcription}
                </pre>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="hor-line" />

      {/* VIDEO FEED SECTION */}
      <section id="video-feed">
        <div className="container">
          <div className="row mt-3">
            <div
              className="col-md-12 d-flex justify-content-center align-items-center"
              style={{ flexDirection: "column" }}
            >
              <div className="h2 section-heading">Your Video Feed</div>
              <div className="col-lg-4 divider my-2" />
              <div className="text-center normal-text">
                Browse through the SL videos created by others and shared with
                the entire community!
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row container d-flex flex-column justify-content-center align-items-center">
        {videoList}
      </div>
    </div>
  );
}

export default Videos;
