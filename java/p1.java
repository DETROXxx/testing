//To print a reversed word string without  trailing spaces before and after 
class p1 {
    public String reverseWords(String s) {
        StringBuilder reversedString = new StringBuilder();
        String[] words = s.trim().split("\\s+");

        for (int i = words.length - 1; i >= 0; i--) {
            if (!words[i].isEmpty()) {
                reversedString.append(words[i]);
                if (i > 0) {
                    reversedString.append(" ");
                }
            }
        }

        return reversedString.toString();
    }
}

