package study.statistics;

import java.lang.instrument.Instrumentation;

/**
 * Created by james.boo on 2017. 6. 26..
 */
public class StatisticsAgent {
    public static void premain(String agentArguments,
                               Instrumentation instrumentation) {
        StatisticsClassTransformer transformer = new StatisticsClassTransformer();
        instrumentation.addTransformer(transformer);
    }

}
