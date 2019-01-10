let knowledge = ["nothing.", "nothing.", "stateful recursion.", "everything."];

console.log(thinkAbout(knowledge));

function thinkAbout(ideas, remaining = 2, thoughts = 0) {
  if (remaining == 0) return "I understand " + ideas[thoughts];
  return "I think... " + thinkAbout(ideas, remaining - 1, thoughts + 1);
}
