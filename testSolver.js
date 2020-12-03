const s = require("./satSolver")
const f = require("./formulas")


f.formulas.map((f, i) => {
  let solution = s.solve(f)
  console.log(`Formula ${i + 1} has ${solution.length} valid solutions:`, solution)
})
