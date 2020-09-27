import unittest
import largestWord

class TestLargestWord(unittest.TestCase):

  #Test if success cases of getWordsFromFile function work propperly
  def testSuccessGetWordsFromFile(self):
    self.assertEqual(largestWord.getWordsFromFile('./testData/testFile.txt'), ['hello\n', 'from\n', 'the\n', 'other\n', 'side'])

  #Test if error cases of getWordsFromFile function work propperly
  def testErrorGetWordsFromFile(self):
    with self.assertRaises(TypeError):
      largestWord.getWordsFromFile(12345)

  #Test if success cases of reverseWord function work propperly
  def testSuccessReverseWord(self):
    self.assertEqual(largestWord.reverseWord('electron'), 'nortcele')

  #Test if failure cases of reverseWord function work propperly
  def testFailureReverseWord(self):
    self.assertNotEqual(largestWord.reverseWord('electron'), 'electron')

  #Test if error cases of reverseWord function work propperly
  def testErrorReverseWord(self):
    with self.assertRaises(TypeError):
      largestWord.reverseWord(12345)

  #Test if success cases of GetLongestWord function work propperly
  def testSuccessGetLongestWord(self):
    self.assertEqual(largestWord.getLongestWord(['the\n', 'largest\n', 'word\n', 'what\n', 'is']), 'largest\n')

  #Test if failure cases of GetLongestWord function work propperly
  def testFailureGetLongestWord(self):
    self.assertNotEqual(largestWord.getLongestWord(['the\n', 'largest\n', 'word\n', 'what\n', 'development\n', 'is']), 'largest\n')
    

if __name__ == "__main__":
  unittest.main()