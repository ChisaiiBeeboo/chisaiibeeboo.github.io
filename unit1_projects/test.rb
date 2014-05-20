############## => PAD ARRAY #################
# class Array
# 	def pad(min_size, opt=nil)
# 		total = min_size - self.length
# 		(self << total.times.map{ opt ).flatten
# 	end
# end

# p [1,2,3].pad(0)

# p pad([1,2,3], 5)

# p [1,2,3].pad_array(5)

# arr = [1,2,3]

# p (arr << 2.times.map{ 'apple' }).flatten

###################### GROUP PROJECT ###################################


# i_want_pets = ["I", "want", 3, "pets", "but", "I", "only", "have", 2, ":(." ]
# my_family_pets_ages = {"Evi" => 6, "Hoobie" => 3, "George" => 12, "Bogart" => 4, "Poly" => 4, 
#   "Annabelle" => 0, "Ditto" => 3}

# # def my_array_modification_method(source, thing_to_modify) 
# # 	x = source.join(' ')
# # 	x.gsub(/\d+/) { |num| num.to_i + thing_to_modify }
# # end

# # def my_hash_modification_method(my_family_pets_ages, 2) 
# # end


# x = i_want_pets.join(' ')
# p 

################# CIPER ##################################

# x = '#'

# p x.match(/[@|#|$|%|^|&|*]/)



# shift method that accepts input letter and output letter located 4 positions before
# p alphabet =('a'..'z').to_a
# p shifted =('a'..'z').to_a.rotate(4)
# p  coded_array = "m^aerx%e&gsoi!".split('')

# # def cipher(str)
# #	coded_array = str.split('')
# # 	 alphabet =('a'..'z').to_a
# #	shifted =('a'..'z').to_a.rotate(4)
# # 	 coded_array.each do |x|
# #		shifted.each do |y|
# #		alphabet.each do |z|
# #       if x == y 
# 			return y


# end

# p cipher(coded)



# p ['i kazoozles'].zip




# p "string".index

# # i_want_pets = ["I", "want", 3, "pets", "but", "I", "only", "have", 2, ":(." ]
# my_family_pets_ages = {"Evi" => 6, "Hoobie" => 3, "George" => 12, "Bogart" => 4, "Poly" => 4, 
#   "Annabelle" => 0, "Ditto" => 3}

# # def my_array_modification_method(source, thing_to_modify)
# # 	source.map do |thing|
# # 		 if thing.is_a? Integer 
# # 		  thing + thing_to_modify 
# # 		 else
# # 		   thing
# # 		 end
# # end

# def my_hash_modification_method(source, thing_to_modify)
# 	  source.each do |key,value| 
# 		source[key] += thing_to_modify
# 	end
# end

# # p my_array_modification_method(i_want_pets, 1)
# p my_hash_modification_method(my_family_pets_ages, 2) 






#=> {"Evi" => 8, "Hoobie" => 5, "George" => 14, "Bogart" => 6, "Poly" => 6, "Annabelle" => 2, "Ditto" => 5}







# class Die
#   def initialize(sides)
#  	raise ArgumentError, 'Wrong number' unless sides > 0
#   	@sides = sides

#   end
  
#   def sides
# 	@sides
#   end
  
#   def roll
#     rand(1..6)
#   end
# end


# die = Die.new(3)
# p die.sides # returns 3
# p die.roll # returns a random number between 1 and 6
# p die = Die.new(0) # Should throw ArgumentError 'Wrong number'








# class Die
#   def initialize(labels)
#   	raise ArgumentError, 'No Empty Arrays' if labels[0] == nil
#   	@sides = labels.length
#   	@labels = labels
#   end

#   def sides
#   	@sides
#   end

#   def roll
#   	@labels.sample
#   end
# end


# die = Die.new(['A', 'B', 'C', 'D', 'E', 'F'])
# p die.sides # still returns the number of sides, in this case 6
# p die.roll # returns one of ['A', 'B', 'C', 'D', 'E', 'F'], randomly
# p die = Die.new([]) # should throw "No Empty Arrays" ArgumentError

class GuessingGame
	def initialize(answer)
		@answer = answer
	end

	def guess(guess)
		if guess > answer
			:higher
		elsif guess < answer
			:lower
		else
			:correct
		end
	end

	def solved?
		if guess == :correct ? true : false
	end

end


game = GuessingGame.new(10)

game.solved?   # => false

game.guess(5)  # => :low
game.guess(20) # => :high
game.solved?   # => false

game.guess(10) # => :correct
game.solved?   # => true






























