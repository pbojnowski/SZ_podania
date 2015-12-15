package hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
class HomeController {

	@RequestMapping("/")
	String index() {
		return "index";
	}
}
