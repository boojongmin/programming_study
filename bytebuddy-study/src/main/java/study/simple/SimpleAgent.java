package study.simple;

import java.lang.instrument.Instrumentation;

/**
 * Created by james.boo on 2017. 6. 26..
 */
public class SimpleAgent {
    //TODO step 2
    public static void premain(String agentArguments, Instrumentation instrumentation) {
        System.out.println("Simple Agent");
        SimpleClassTransformer transformer = new SimpleClassTransformer();
        instrumentation.addTransformer(transformer);
    }
}
