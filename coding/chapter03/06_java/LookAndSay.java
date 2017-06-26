
import static java.util.Arrays.asList;
import java.util.List;
import java.util.ArrayList;
import java.util.function.*;


class LookAndSay {
    public static void main(String... args) {
        System.out.println(next(asList(1,3,1,1,2,2,2,1)));
    }
    private static List<Integer> next(List<Integer> ns) {
        return concat(map(g -> asList(g.size(), g.get(0)), group(ns)));
    }
    
    // public static <A, B> List<B> map(Function<A, B> f, List<A> as) {
    public static <A, B> List<B> map(Function<List<A>, B> f, List<List<A>> as) {
        List<B> bs = new ArrayList<>();
        System.out.println("---");
        System.out.println(as);
        System.out.println("---");
        for (A a: as) {
            bs.add(f.apply(a));
        }
        return bs;
    }

    public static<A> List<A> concat(List<List<A>> ass) {
        List<A> list = new ArrayList<>();
        for (List<A> as : ass) {
            list.addAll(as);
        }
        return list;
    }

    public static <A> List<List<A>> group(List<A> as) {
        List<List<A>> ass = new ArrayList<>();
        List<A> g = null;
        for ( A a : as ) {
            if ( g == null || !g.get(0).equals(a)) {
                g = new ArrayList<>();
                ass.add(g);
            }
            g.add(a);
        }
        return ass;
    }
}