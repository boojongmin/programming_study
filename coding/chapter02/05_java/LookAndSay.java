import java.util.function.Function;
import java.util.regex.MatchResult;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class LookAndSay {
    public static void main(String... args) {
        System.out.println(ant(Integer.parseInt(args[0])));
    }

    private static String ant(int n) {
        String s = "1";
        for (int line = 0; line < n; line++) {
            s = next(s);
        }
        return s;
    }

    private static String next(String s) {
        // return replace(s, "(.)\\1*", m -> "" + m.group().length() + m.group(1));
        return replace(s, "(.)\\1*", m -> {
            // System.out.println("group(): " + m.group());
            // System.out.println("group(1): " + m.group(1));
            // System.out.println("groupCount(): " + m.groupCount());
            return  "" + m.group().length() + m.group(1);
        });
    }

    public static String replace(String s,
                                 String regex,
                                 Function<MatchResult, String> fn) {
        StringBuffer sb = new StringBuffer();
        Matcher m = Pattern.compile(regex).matcher(s);
        while (m.find()) {
            m.appendReplacement(sb, fn.apply(m));
        }
        m.appendTail(sb);
        return sb.toString();
    }
}