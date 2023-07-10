package grupo1.lab2.Controllers;

import grupo1.lab2.Documents.VoluntarioDocument;
import grupo1.lab2.Services.VoluntarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/voluntario")
public class VoluntarioController {
    @Autowired
    VoluntarioService voluntarioService;

    @GetMapping
    public List<VoluntarioDocument> getAll(){
        return voluntarioService.getAll();
    }
}
