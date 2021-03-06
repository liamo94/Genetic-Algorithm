# Generic-Algorithm
Generic Algorithm (evolution) written in numerous coding languages:

  __LANGUAGES__
  * C++
  * C#
  * Go
  * Java
  * JavaScipt
  * Kotlin
  * Ruby
  * Perl
  * PHP
  * Python
  * Swift
  * Typescript

 __Overview:__
 
This project was a challenge I set myself to write the same piece of code over as many languages as possible to see the differences. The code uses arrays, ints, strings, while loops, for loops, conditional logic and objects so I believe it was a great comparison of a small subsets of some of the features the languages have to offer. This was not to showcase best practices or the optimal solution for all languages (at least for the ones I am less familar with), but rather enforce the idea that all modern languages follow similar flows.

The rule I set myself was line by line I had to make the algorithms as similar as the others (e.g where possible use language  specific syntax like Ternary operator, StringBuilder etc). I knew the languages I was less familiar with would have a less optimal solution, but I had to find a balance between speed of delivery and performance. The main goal was to show that if I knew a few languages, I could successfully code the algorithm in all of them.

 __Pseudocode:__
  ```
  Create inital population of POP_SIZE
  Calculate fitness
  WHILE string not made
    Selection
    Crossover
    Mutate
    Re-compute fitness
  RETURN NUMBER OF STEPS
```

__Compairson of performance__

The code was ran _10 times using a pool of 100 strings and a 5% chance of mutation_, with the average time and permutations recorded. Times are not meant to be a comparison of which language is better, rather a reference (e.g PHP was ran in a browser which would have been slower and I am not as strong with procedural languages like C++)

| Language | Lines of code| Avg Permutations | Avg Time (ms) | Permuations per ms |
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|
| C++ ~     | 218 | 522 | 5,389 | 0.10 |
| C# ~      | 169| 256 | 120 | 2.13 |
| Go ~ | 166 | 316 | 58 | 5.45 |
| Java + |  184 | 214 | 218 | 0.98 |
| JavaScript ~ | 164 | 195 | 118 | 1.65 |
| Kotlin +| 153 | 214 | 113 | 1.65 |
| Ruby ~ | 174 | 277 | 324 | 0.85 |
| Perl ~ | 208 | 1,033 | 3,089 | 0.33 |
| PHP ± | 202 | 331 | 5,750 | 0.06 |
| Python ~ | 128 | 223 | 438 | 0.51 |
| Swift ~ | 159 | 77 | 178 | 0.43 |
| TypeScript ^ | 172 | 134 | 115 | 1.17 |
| `Average` | **175** | **316** | **1,326** | **1.28** |
| `Median` | **171** | **240** | **198** | **0.92** |

+Compiled and ran as jar

^Ran as transpiled JavaScript (then run with node)

~Ran in the terminal

±Ran in browser

Note: Lines of code has comments and white spaces removed from comparison
