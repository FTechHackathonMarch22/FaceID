// import { useEffect } from 'react';
 /*import {
     loadFaceLandmarkModel,
     loadFaceRecognitionModel,
     loadSsdMobilenetv1Model,
 } from 'face-api.js';*/
// import cv from 'opencv.js';

//const MODEL_URL = './models'; //all models are served from this path


/*
const MODEL_URL = '../models'; // Ensure models are served from this path

const loadModels = async () => {
    try {
        await loadSsdMobilenetv1Model(MODEL_URL);
        await loadFaceLandmarkModel(MODEL_URL);
        await loadFaceRecognitionModel(MODEL_URL);
        console.log('Models loaded successfully');
    } catch (error) {
        console.error('Error loading models:', error);
    }
};

// useEffect(() => {
//     loadModels();
// }, []);

const video = document.getElementById('video');

function startVideo() {
  navigator.mediaDevices.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.error(err)
  );
}
startVideo();

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.tinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    //console.log(detections)
    canvas.getContent('2d').clearRect(0, 0, canvas.width, canvas.height);
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 100);
});


Promise.all(
    [
      faceapi.nets.tnyFaceDetector.loadFromUrl('/models'),
      faceapi.nets.faceLandmark68.Net.loadFromUrl('/models'),
      faceapi.nets.faceRecognition.loadFromUrl('/models'),
      faceapi.nets.faceExpressionNet.loadFromUrl('/models'),
    ]).then(startVideo)
  

/*function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const video = document.querySelector('video'); // Ensure you have a <video> element in your HTML
        if (video) {
          video.srcObject = stream;
        }
      })
      .catch(err => console.error('Error accessing webcam:', err));
  }
  
  startVideo();
  */

  let abutton = document.getElementById('abutton');
  let avideo = document.getElementById('avideo');
  avideo.muted = true;
  abutton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }).then((stream) => {
      avideo.srcObject = stream;
      avideo.addEventListener('loadedmetadata', () => {
        avideo.play();
      })
    }).catch(alert);

  })

