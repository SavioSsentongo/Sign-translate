export const A = (ref) => {
  let animations = [];

  // First animation set - forming the "A" hand shape

  // Bend index finger joints
  animations.push([
    "mixamorigRightHandIndex1",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandIndex2",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandIndex3",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);

  // Bend middle finger joints
  animations.push([
    "mixamorigRightHandMiddle1",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandMiddle2",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandMiddle3",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);

  // Bend ring finger joints
  animations.push([
    "mixamorigRightHandRing1",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandRing2",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandRing3",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);

  // Bend pinky finger joints
  animations.push([
    "mixamorigRightHandPinky1",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandPinky2",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);
  animations.push([
    "mixamorigRightHandPinky3",
    "rotation",
    "z",
    Math.PI / 2,
    "+",
  ]);

  // Slightly rotate the hand for positioning
  animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 10, "-"]);
  animations.push(["mixamorigRightHand", "rotation", "z", Math.PI / 8, "+"]);
  animations.push(["mixamorigRightHand", "rotation", "y", Math.PI / 12, "+"]);

  // Adjust the right forearm to position the arm correctly
  animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 6, "+"]);
  animations.push([
    "mixamorigRightForeArm",
    "rotation",
    "x",
    -Math.PI / 4,
    "-",
  ]);
  animations.push([
    "mixamorigRightForeArm",
    "rotation",
    "y",
    Math.PI / 12,
    "+",
  ]);

  // Slight arm rotation for natural posture
  animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 8, "-"]);
  animations.push(["mixamorigRightArm", "rotation", "y", -Math.PI / 12, "-"]);

  // Add the first animation to the queue
  ref.animations.push(animations);

  // Second animation set - restoring to neutral (reset)
  animations = [];

  // Reset left hand finger positions (just placeholders in this case)
  animations.push(["mixamorigLeftHandIndex1", "rotation", "y", 0, "+"]);
  animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", 0, "+"]);
  animations.push(["mixamorigLeftHandRing1", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHandPinky1", "rotation", "y", 0, "-"]);

  // Reset all right hand fingers to straight position
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

  // Reset left hand and arm rotations (placeholders)
  animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);

  // Redundant reset of some fingers (safe for fallback)
  animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);

  // Reset thumb
  animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

  // Reset hand and arm positions
  animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
  animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
  animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
  animations.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);

  // Push reset animation to the queue
  ref.animations.push(animations);

  // Trigger animation sequence if not already running
  if (ref.pending === false) {
    ref.pending = true;
    ref.animate();
  }
};
