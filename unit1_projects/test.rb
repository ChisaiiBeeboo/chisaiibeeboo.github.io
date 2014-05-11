oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray= [4, 4, 5, 5, 6, 6, 6, 7]

# SUM
p oddLengthArray.inject(:+)
p evenLengthArray.inject(:+)


# MEAN
p oddLengthArray.inject(:+).to_f/oddLengthArray.length
p evenLengthArray.inject(:+).to_f/evenLengthArray.length

# MEDIAN
# sorted = oddLengthArray.sort
sorted = oddLengthArray.sort
p ((sorted[(sorted.length-1)/2]) + (sorted[sorted.length/2]))/2.0

