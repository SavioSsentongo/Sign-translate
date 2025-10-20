export const C = (ref) => {
  let animations = [];

  // === Curl fingers slightly to form the "C" shape ===
  animations.push([
    "mixamorigRightHandIndex1",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandIndex2",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandIndex3",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandMiddle1",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandMiddle2",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandMiddle3",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandRing1",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandRing2",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandRing3",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandPinky1",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandPinky2",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandPinky3",
    "rotation",
    "z",
    Math.PI / 4.5,
    "+",
  ]);

  // === Thumb positioning for the "C" shape ===
  animations.push([
    "mixamorigRightHandThumb1",
    "rotation",
    "x",
    Math.PI / 3,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandThumb1",
    "rotation",
    "y",
    Math.PI / 3,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandThumb2",
    "rotation",
    "y",
    -Math.PI / 6,
    "-",
  ]);
  animations.push([
    "mixamorigRightHandThumb3",
    "rotation",
    "y",
    -Math.PI / 7,
    "-",
  ]);

  // === Wrist and arm posture adjustments ===
  animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI / 10, "-"]);
  animations.push(["mixamorigRightHand", "rotation", "y", Math.PI / 4, "+"]);
  animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 9, "+"]);
  animations.push([
    "mixamorigRightForeArm",
    "rotation",
    "x",
    Math.PI / 18,
    "+",
  ]);
  animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 6.5, "-"]);

  // Push the "C" sign animation sequence
  ref.animations.push(animations);

  animations = [];

  // === Reset all finger joints back to neutral ===
  animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);

  // === Reset thumb to neutral position ===
  animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
  animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

  // === Reset wrist and arm to original posture ===
  animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

  // Push the reset sequence
  ref.animations.push(animations);

  // Start animation if not already pending
  if (ref.pending === false) {
    ref.pending = true;
    ref.animate();
  }
};
