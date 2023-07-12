package grupo1.lab2.Controllers;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Documents.VoluntarioDocument;
import grupo1.lab2.Services.VoluntarioService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/{id}/averageSkills")
    public ResponseEntity<Double> obtenerPromedioHabilidades(@PathVariable String id) {
        double average = voluntarioService.calcularPromedioHabilidades(id);
        return ResponseEntity.ok(average);
    }

    @GetMapping("/habilidades/{id}")
    public  ResponseEntity<List<HabilidadDocument>> getskillsVoluntario(@PathVariable String id){
        List<HabilidadDocument> habilidadDocuments = voluntarioService.getSkillsUser(id);
        if(habilidadDocuments.isEmpty()){return ResponseEntity.noContent().build();}
        return ResponseEntity.ok(habilidadDocuments);
    }
}
