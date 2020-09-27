#Function to get longest word from a words list
def getLongestWord(wordsList):
  longestWord = ""
  for word in wordsList:
    if len(word) > len(longestWord):
      longestWord = word
  return longestWord

#Function to reverse a given word
def reverseWord(word):
  if not isinstance(word, str):
    raise TypeError
  return word [::-1]

#Function to get the words in lines from a file, requires the file path
def getWordsFromFile(filePath):
  if not isinstance(filePath, str):
    raise TypeError
  wordsFile = open(filePath,'r')
  fileLines = wordsFile.readlines()
  wordsFile.close()
  return fileLines

#Reading word file
wordsList = getWordsFromFile('./wordsFile.txt')

#Getting the longest word
longestWord = getLongestWord(wordsList)

#Refersing the longest word
reversedLongestWord = reverseWord(longestWord)

#Printing results
print(longestWord)
print(reversedLongestWord)


