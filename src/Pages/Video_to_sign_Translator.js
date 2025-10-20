import React, { useEffect, useRef, useState } from "react";

function VideoToSignTranslator() {
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);
  const modelRef = useRef(null);
  const maxPredictionsRef = useRef(0);
  const [labelHistory, setLabelHistory] = useState([]);
  const [isModelReady, setIsModelReady] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const requestRef = useRef(null);

  // Load both TensorFlow and the pose model
  useEffect(() => {
    const tfScript = document.createElement("script");
    tfScript.src =
      "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js";
    tfScript.onload = () => {
      const poseScript = document.createElement("script");
      poseScript.src =
        "https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8/dist/teachablemachine-pose.min.js";
      poseScript.onload = () => setIsModelReady(true);
      document.body.appendChild(poseScript);
    };
    document.body.appendChild(tfScript);

    return () => {
      cancelAnimationFrame(requestRef.current);
      if (webcamRef.current) webcamRef.current.stop();
    };
  }, []);

  const start = async () => {
    if (!window.tmPose) {
      alert("Pose model script not yet loaded!");
      return;
    }

    const modelURL = process.env.PUBLIC_URL + "/my-pose-model/model.json";
    const metadataURL = process.env.PUBLIC_URL + "/my-pose-model/metadata.json";

    const model = await window.tmPose.load(modelURL, metadataURL);
    modelRef.current = model;
    maxPredictionsRef.current = model.getTotalClasses();

    const size = 400;
    const flip = true;
    const webcam = new window.tmPose.Webcam(size, size, flip);
    await webcam.setup();
    await webcam.play();
    webcamRef.current = webcam;

    const canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;

    setIsCapturing(true);
    loop();
  };

  const stop = () => {
    if (webcamRef.current) {
      webcamRef.current.stop();
      setIsCapturing(false);
      cancelAnimationFrame(requestRef.current);
    }
  };

  const loop = async () => {
    webcamRef.current.update();
    await predict();
    requestRef.current = requestAnimationFrame(loop);
  };

  const predict = async () => {
    const model = modelRef.current;
    const webcam = webcamRef.current;
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    drawPose(pose);
    return prediction;
  };

  const drawPose = (pose) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !webcamRef.current?.canvas) return;
    ctx.drawImage(webcamRef.current.canvas, 0, 0);
    if (pose) {
      const minPartConfidence = 0.5;
      window.tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
      window.tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
  };

  const handlePredict = async () => {
    const prediction = await predict();

    const highConfidencePredictions = prediction.filter(
      (p) => p.probability >= 0.85
    );

    if (highConfidencePredictions.length === 0) {
      setLabelHistory((prev) => ["No confident predictions", ...prev]);
      return;
    }

    const topResult = highConfidencePredictions.reduce((prev, current) =>
      prev.probability > current.probability ? prev : current
    );

    setLabelHistory((prev) => [
      `${topResult.className} - ${(topResult.probability * 100).toFixed(2)}%`,
      ...prev,
    ]);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Sign Language to Text</h2>

      <canvas
        ref={canvasRef}
        style={{ marginBottom: "20px", border: "2px solid #ccc" }}
      />

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {isModelReady ? (
          <>
            <button
              onClick={start}
              disabled={isCapturing}
              style={{ padding: "10px 20px", fontSize: "16px" }}
            >
              Start
            </button>
            <button
              onClick={stop}
              disabled={!isCapturing}
              style={{ padding: "10px 20px", fontSize: "16px" }}
            >
              Stop
            </button>
            <button
              onClick={handlePredict}
              disabled={!isCapturing}
              style={{ padding: "10px 20px", fontSize: "16px" }}
            >
              Predict
            </button>
          </>
        ) : (
          <p>Loading model scripts...</p>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Predictions</h3>
        {labelHistory.length === 0 ? (
          <p>No predictions yet</p>
        ) : (
          labelHistory.map((label, index) => <div key={index}>{label}</div>)
        )}
      </div>
    </div>
  );
}

export default VideoToSignTranslator;
