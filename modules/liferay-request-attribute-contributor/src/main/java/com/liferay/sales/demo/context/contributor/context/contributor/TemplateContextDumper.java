package com.liferay.sales.demo.context.contributor;

import com.liferay.petra.reflect.ReflectionUtil;
import com.liferay.portal.kernel.template.TemplateContextContributor;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.osgi.service.component.annotations.Component;

/**
 * A simple POC class that outputs all available template elements.
 * Can be used within a fragment.
 * 
 * @author olaf
 */
@Component(
	immediate = true,
	property = {"type=" + TemplateContextContributor.TYPE_GLOBAL},
	service = TemplateContextContributor.class
)
public class TemplateContextDumper
	implements TemplateContextContributor {

	@Override
	public void prepare(
		Map<String, Object> contextObjects, HttpServletRequest request) {
		
		contextObjects.put("templateDumper", new TemplateDumper(contextObjects));
	}

	public class TemplateDumper {
		private Map<String, Object> contextObjects;

		public TemplateDumper(Map<String, Object> contextObjects) {
			this.contextObjects = contextObjects;
		}
		
		@Override
		public String toString() {
			StringBuffer result = new StringBuffer("<ul>");
			Set<String> unsortedKeys = contextObjects.keySet();
			ArrayList<String> keys = new ArrayList<>();
			keys.addAll(unsortedKeys);
			Collections.sort(keys);
			for (String key : keys) {
				result.append("<li><b>")
				      .append(key)
					  .append("</b> ")
					  .append(visualization(key))
					  .append("</li>");
			}
			result.append("</ul>");
			return result.toString();
		}

		private String visualization(String key) {
			Object object = contextObjects.get(key);
			if(object != null) {
				if(key.equals("Request")) {
					try {
						Method keysMethod = ReflectionUtil.getDeclaredMethod(object.getClass(), "keys");
						Method valuesMethod = ReflectionUtil.getDeclaredMethod(object.getClass(), "values");
						Object keys = keysMethod.invoke(object);
						Object values = valuesMethod.invoke(object);
						return enumerateKeys(keys, values); 
					}
					catch (Exception e) {
						e.printStackTrace();
						return e.getClass().getName() + " " + e.getMessage();
					}
				}
				return object.getClass().getName(); 
			}
			return "<i>null</i>";
		}

		private String enumerateKeys(Object keys, Object values) throws Exception {
			StringBuffer result = new StringBuffer("<ul>");
			Method keyIteratorMethod = ReflectionUtil.getDeclaredMethod(keys.getClass(), "iterator");
			Method valueIteratorMethod = ReflectionUtil.getDeclaredMethod(values.getClass(), "iterator");
			Object keyIterator = keyIteratorMethod.invoke(keys);
			Object valueIterator = valueIteratorMethod.invoke(values);
			Method hasNextMethod = ReflectionUtil.getDeclaredMethod(keyIterator.getClass(), "hasNext");
			Method nextKeyMethod = ReflectionUtil.getDeclaredMethod(keyIterator.getClass(), "next");
			Method nextValueMethod = ReflectionUtil.getDeclaredMethod(valueIterator.getClass(), "next");
			while((boolean) hasNextMethod.invoke(keyIterator)) {
				Object key = nextKeyMethod.invoke(keyIterator);
				Object value = nextValueMethod.invoke(valueIterator);
				
				result.append("<li><strong>" + key.toString() + "</strong> " + value.toString() + "</li>");
			}
			result.append("</ul>");
			return result.toString();
		}
	}

}

