package study;

import java.lang.instrument.Instrumentation;

/**
 * Created by james.boo on 2017. 6. 26..
 */


//http://javabeat.net/introduction-to-java-agents/
//https://www.infoq.com/articles/Easily-Create-Java-Agents-with-ByteBuddy

public class JavaAgent {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
    //TODO step 1
    public static void premain(String agentArgument, Instrumentation instrumentation) {
        System.out.println("Test Java Agent");
    }
}
