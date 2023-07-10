package grupo1.lab2.Controllers;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Services.HabilidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/habilidad")
public class HabilidadController {

    @Autowired
    HabilidadService habilidadService;

    @GetMapping()
    public List<HabilidadDocument> getAll(){
        return habilidadService.getAll();
    }

}
