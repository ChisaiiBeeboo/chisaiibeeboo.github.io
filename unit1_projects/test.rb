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

# def my_array_modification_method(i_want_pets, 1) 
# end

# def my_hash_modification_method(my_family_pets_ages, 2) 
# end


# p i_want_pets[2] + 1

# p i_want_pets.grep(\d)

# i_want_pets.each {|x| x.class == Fixnum x + 1 }

################# CIPER ##################################




str = "i heart 300 kazoozles"

p str.match(/\d+/)

