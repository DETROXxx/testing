public class barfi {
    public static void main(String[] args) {
        // to print a diamond shape
        for (int i = 0; i < 7+ 1; i++) {
            for (int j = 0; j < 7 - i; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j < 2 * i + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Print bottom half of the diamond
        for (int i = 7 - 1; i >= 0; i--) {
            for (int j = 0; j < 7 - i; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j < 2 * i + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
    }
    
}
}