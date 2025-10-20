export const B = (ref) => {
  let animations = [];

  // First animation set - forming the "B" hand shape

  // Straighten all fingers up
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

  // Fold the thumb across the palm
  animations.push([
    "mixamorigRightHandThumb1",
    "rotation",
    "x",
    -Math.PI / 6,
    "-",
  ]);
  animations.push([
    "mixamorigRightHandThumb2",
    "rotation",
    "y",
    Math.PI / 7,
    "+",
  ]);

  // Position hand upright and flat
  animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 2.2, "-"]);
  animations.push(["mixamorigRightHand", "rotation", "y", Math.PI / 12, "+"]);
  animations.push(["mixamorigRightHand", "rotation", "z", Math.PI / 20, "+"]);

  // Position forearm
  animations.push([
    "mixamorigRightForeArm",
    "rotation",
    "x",
    -Math.PI / 14,
    "-",
  ]);
  animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);

  // Adjust arm position
  animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 10, "-"]);
  animations.push(["mixamorigRightArm", "rotation", "y", -Math.PI / 16, "-"]);

  // Push hand pose for "B"
  ref.animations.push(animations);

  // Second animation set - reset back to neutral
  animations = [];

  animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

  animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
  animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);

  animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
  animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);

  animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
  animations.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);

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

  ref.animations.push(animations);

  // Start the animation if not already running
  if (ref.pending === false) {
    ref.pending = true;
    ref.animate();
  }
};
