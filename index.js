const cats = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendCat(name) {
  cats.push(name)
}

function destructivelyPrependCat(name) {
  cats.unshift(name)
}

function destructivelyRemoveLastCat() {
  cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift()
}

function appendCat(name) {
  let catCat = [...cats, name]
  return catCat
}

function prependCat(name) {
  let catsCat = [name, ...cats]
  return catsCat
}

function removeLastCat() {
  return cats.slice(0,2)
}

function removeFirstCat() {
  return cats.slice(1,3)
}