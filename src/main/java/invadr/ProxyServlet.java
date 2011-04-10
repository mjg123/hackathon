package invadr;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;

public class ProxyServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {

        final HttpPost post = new HttpPost("http://www.192.com/people/search/");
        final DefaultHttpClient httpclient = new DefaultHttpClient();

        final List<NameValuePair> nvps = new ArrayList<NameValuePair>();
        nvps.add(new BasicNameValuePair("looking_for", req.getParameter("looking_for")));
        nvps.add(new BasicNameValuePair("location", req.getParameter("location")));
        nvps.add(new BasicNameValuePair("submitBtn", req.getParameter("Search")));
        post.setEntity(new UrlEncodedFormEntity(nvps));

        System.out.println(req.getParameter("looking_for"));

        final HttpResponse response = httpclient.execute(post);

        resp.setContentType(response.getHeaders("Content-Type")[0].getValue());
        resp.getOutputStream().println(IOUtils.toString(response.getEntity().getContent()));

    }
}
