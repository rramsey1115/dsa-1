// Find common elements between two arrays
function findCommonElements(array1, array2) {
  const set1 = new Set(array1);
  return array2.filter((item) => set1.has(item));
}

// Example: Find common skills between job requirements and candidate
const jobRequirements = ["JavaScript", "React", "Node.js", "SQL", "Git"];
const candidateSkills = ["JavaScript", "React", "Angular", "Git", "Python"];

const matchingSkills = findCommonElements(jobRequirements, candidateSkills);
console.log(matchingSkills); // ['JavaScript', 'React', 'Git']
