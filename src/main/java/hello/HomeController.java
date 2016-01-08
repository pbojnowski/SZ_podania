package hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
class HomeController {

	@RequestMapping(value = "/")
	String index() {
		return "index";
	}

	@RequestMapping(value = "/views/login.html")
	String login() {
		return "views/login";
	}

	@RequestMapping(value = "/views/panel.html")
	String panel() {
		return "views/panel";
	}

	@RequestMapping(value = "/views/main.html")
	String main() {
		return "views/main";
	}
}
