package com.liferay.sales.demo.context.contributor;

import com.liferay.portal.kernel.template.TemplateContextContributor;
import com.liferay.portal.kernel.util.HtmlUtil;
import com.liferay.portal.kernel.util.StringBundler;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.osgi.service.component.annotations.Component;

/**
 * A simple POC class that outputs all available request attributes.
 * Can be used within a fragment.
 * 
 * @author olaf
 */
@Component(
	immediate = true,
	property = {"type=" + TemplateContextContributor.TYPE_GLOBAL},
	service = TemplateContextContributor.class
)
public class RequestAttributesTemplateContextContributor
	implements TemplateContextContributor {

	@Override
	public void prepare(
		Map<String, Object> contextObjects, HttpServletRequest request) {
		Enumeration<String> attributeNames = request.getAttributeNames();
		ArrayList<String> names = Collections.list(attributeNames);
		Collections.sort(names);
		
		StringBundler result = new StringBundler();
		result.append("<ul>");
		for (String name : names) {
			result
			.append("<li><span class=\"attributeName\">")
			.append(name)
			.append("</span>: <span class=\"attributeVisualization\">")
			.append(visualization(name, request.getAttribute(name)))
			.append("</span>")
			.append("</li>");
			;
		}
		result.append("</ul>");
		contextObjects.put("requestAttributes", result);
	}

	public String visualization(String name, Object object) {
		if(object == null) {
			return "null";
		} 
		if(name.equals("USER")) {
			return "-MASKED-FOR-PRIVACY-";
		}
		
		String sObject = object.toString();
		String className = object.getClass().getName();
		if(object instanceof String) {
			return "\"" + HtmlUtil.escape(sObject) + "\"";
		} else if(object instanceof Number) {
			return sObject;
		} else if(sObject.startsWith(className + "@")) {
			return "- ("
					+ object.getClass().getName()
					+ ")";  
		} else {
			return HtmlUtil.escape(sObject) 
					+ " ("
					+ object.getClass().getName()
					+ ")";  
		}
	}
}
