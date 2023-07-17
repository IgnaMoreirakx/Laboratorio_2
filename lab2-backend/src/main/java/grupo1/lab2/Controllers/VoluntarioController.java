package grupo1.lab2.Controllers;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Documents.VoluntarioDocument;
import grupo1.lab2.Services.VoluntarioService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public ResponseEntity<VoluntarioDocument> getVoluntarioById(@PathVariable("id") String id){
        VoluntarioDocument voluntario = voluntarioService.getVoluntarioById(id);
        return ResponseEntity.ok(voluntario);
    }

    @GetMapping("/{id}/averageSkills")
    public ResponseEntity<Double> obtenerPromedioHabilidades(@PathVariable String id) {
        double average = voluntarioService.calcularPromedioHabilidades(id);
        return ResponseEntity.ok(average);
    }

    @GetMapping("/{id}/habilidades")
    public  ResponseEntity<List<HabilidadDocument>> getskillsVoluntario(@PathVariable String id){
        List<HabilidadDocument> habilidadDocuments = voluntarioService.habilidades(id);
        if(habilidadDocuments.isEmpty()){return ResponseEntity.noContent().build();}
        return ResponseEntity.ok(habilidadDocuments);
    }

    @PostMapping()
    public ResponseEntity<String> crearVoluntario(@RequestParam("nombre") String nombre, @RequestParam("contrasena") String contrasena,
                                                  @RequestParam("habilidades") List<String> codigosHabilidades){
        System.out.println(codigosHabilidades);
        String respuesta = voluntarioService.crearVoluntario(nombre, contrasena, codigosHabilidades);
        return ResponseEntity.ok(respuesta);
    }
}
