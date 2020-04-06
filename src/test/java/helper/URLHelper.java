package helper;

public class URLHelper {

    public static String createURLWithPort(String uri, int port) {
        return "http://localhost:" + port + uri;
    }

}
