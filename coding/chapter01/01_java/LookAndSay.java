import java.util.stream.*;

public class LookAndSay {
    public static void main(String... args) {
        String s = "1";
//        for (int line =0; line < 3; line++) {
//            int length = 1;
//            char head = s.charAt(0);
//            String result = "";
//            for(int i= 1; i < s.length(); i++) {
//                if (s.charAt(i) == head) {
//                    length++;
//                } else {
//                    result += length;
//                    result += head;
//                    length = 1;
//                    head = s.charAt(i);
//                }
//            }
//            result += length;
//            result += head;
//            s = result;
//        }
//        System.out.println(s);
        Stream.of(1, 2,3).map(x -> {System.out.println(x); return x;}).map(x -> x + 1).forEach(System.out::println);
    }

}