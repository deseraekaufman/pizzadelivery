# Pizza Delivery

## Part 1

Maria is delivering pizzas to an infinite two-dimensional grid of houses.
She begins by delivering a pizza to the house at her starting location; a dispatcher then calls via radio
and tells her where to move next. Moves are always exactly one house to the north (`^`), south (`v`), east (`>`), or west (`<`).
After each move, Maria delivers a pizza to the house at her new location. The dispatcher has been a little spacey lately,
so Maria sometimes ends up delivering more than one pizza to the same house.

Here are some examples:

- `>` delivers pizzas to two houses: one to the house at the starting location, and one to the house directly east of the starting location.

- `^>v<` delivers pizzas to four houses in a square; the house at the starting/ending location ends up with two pizzas.

- `^v^v^v^v^v` delivers a bunch of pizzas to some very lucky people at only two houses.

Given the string of dispatcher inputs in `input.txt`, how many houses receive at least one pizza?

## Part 2

The next day, to speed up the process, Maria rents a pizza-delivering goat named Clovis.
Maria and Clovis begin at the same starting location, and they both deliver a pizza to this starting house.
Maria and Clovis then take turns moving based on the dispatcher's instructions.

Here are some examples:

- `^v` now delivers pizzas to three houses; Maria goes north and Clovis goes south.

- `^>v<` now delivers pizzas to three houses; Maria and Clovis both end up back where they started.

- `^v^v^v^v^v` now delivers pizzas to 11 houses; Maria treks north and Clovis treks south.

Given the same string of dispatcher inputs as in Part One, how many houses receive at least one pizza?

## Guidelines for your solution

Please provide a solution that answers Part 1 and Part 2 in JavaScript, Ruby, or Python.

By design, this is a fairly simple exercise, so we're hoping for solutions that reflect what you consider well-factored production-quality code. The best solutions will be elegant, as well as correct. Feel free to pull in any libraries you like.

When you're done, submit your solution either as a private repo shared with the github handle [katur](https://github.com/katur), or send it along as a zip file. Please do not include identifying information (e.g., your name, email, Github username) in the contents of your files; our team will evaluate your solution blindly.
