package grupo1.lab2.Controllers;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Services.HabilidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/{codigo}")
    public HabilidadDocument getByCodigo(@PathVariable("codigo") String codigo){
        return habilidadService.getByCodigo(codigo);
    }
    @PostMapping()
    public ResponseEntity<String> crearHabilidad(@RequestParam("nombre") String nombre, @RequestParam("codigo") String codigo, @RequestParam("puntaje") int puntaje){
        String respuesta = habilidadService.crearHabilidad(nombre, codigo, puntaje);
        return ResponseEntity.ok(respuesta);
    }

}
