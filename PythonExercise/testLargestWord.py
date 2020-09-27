import unittest
import largestWord

class TestLargestWord(unittest.TestCase):

  def testSuccessGetWordsFromFile(self):
    self.assertEqual(largestWord.getWordsFromFile('./testData/testFile.txt'), ['hello\n', 'from\n', 'the\n', 'other\n', 'side'])

  def testErrorGetWordsFromFile(self):
    with self.assertRaises(TypeError):
      largestWord.getWordsFromFile(12345)

  def testSuccessReverseWord(self):
    self.assertEqual(largestWord.reverseWord('electron'), 'nortcele')

  def testFailureReverseWord(self):
    self.assertNotEqual(largestWord.reverseWord('electron'), 'electron')

  def testErrorReverseWord(self):
    with self.assertRaises(TypeError):
      largestWord.reverseWord(12345)

  def testSuccessGetLongestWord(self):
    self.assertEqual(largestWord.getLongestWord(['the\n', 'largest\n', 'word\n', 'what\n', 'is']), 'largest\n')

  def testFailureGetLongestWord(self):
    self.assertNotEqual(largestWord.getLongestWord(['the\n', 'largest\n', 'word\n', 'what\n', 'development\n', 'is']), 'largest\n')
    

if __name__ == "__main__":
  unittest.main()