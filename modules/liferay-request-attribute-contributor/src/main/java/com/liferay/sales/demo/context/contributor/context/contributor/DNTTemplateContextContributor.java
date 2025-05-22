package com.liferay.sales.demo.context.contributor;

import com.liferay.portal.kernel.template.TemplateContextContributor;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.osgi.service.component.annotations.Component;

/**
 * Detect if the DNT (Do not track) header is present and enables
 * fragments to display a warning that AC won't work in this case
 * 
 * @author Olaf Kock
 */
@Component(
	immediate = true,
	property = {"type=" + TemplateContextContributor.TYPE_GLOBAL},
	service = TemplateContextContributor.class
)
public class DNTTemplateContextContributor
	implements TemplateContextContributor {

	@Override
	public void prepare(
		Map<String, Object> contextObjects, HttpServletRequest request) {
		String dnt = request.getHeader("DNT");
		if(dnt!=null && dnt.equals("1")) {
			contextObjects.put("dnt", Boolean.TRUE);
		} else {
			contextObjects.put("dnt", Boolean.FALSE);
		}
	}
}
