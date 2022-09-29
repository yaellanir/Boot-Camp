const halfariFamily = {
  name: "yael",
};

const lanirFamily = {
  name: "haia",
};

const lanirSteinFamily = {
  name: "omri",
};

const families = new Map([
  [halfariFamily, 3],
  [lanirFamily, 2],
  [lanirSteinFamily, 4],
]);

for (const family of families) {
  console.log(family[0].name, family[1]);
}
