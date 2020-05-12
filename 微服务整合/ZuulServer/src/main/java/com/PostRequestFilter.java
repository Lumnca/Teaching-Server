package com;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.List;

public class PostRequestFilter extends ZuulFilter {
    @Override
    public String filterType() {
        return FilterConstants.POST_TYPE;
    }

    @Override
    public int filterOrder() {
        return 1;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() {
        RequestContext ctx = RequestContext.getCurrentContext();

        HttpServletRequest request = ctx.getRequest();
        Enumeration<String> httpHeadrInfo =  request.getHeaderNames();
        System.out.println("Http头部信息");
        while (httpHeadrInfo.hasMoreElements()){
            String info = httpHeadrInfo.nextElement();
            System.out.println(info+":"+request.getHeader(info));
        }
        return null;
    }
}
