package grupo1.lab2.Services;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Documents.VoluntarioDocument;
import grupo1.lab2.Repository.HabilidadRepository;
import grupo1.lab2.Repository.VoluntarioRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VoluntarioService {
    @Autowired
    VoluntarioRepository voluntarioRepository;
    @Autowired
    HabilidadService habilidadService;
    public List<VoluntarioDocument> getAll(){
        return voluntarioRepository.findAll();
    }

    public VoluntarioDocument getVoluntarioById(String id){
        return voluntarioRepository.findById(id);
    }

    public double calcularPromedioHabilidades(String id) {
        VoluntarioDocument voluntario = voluntarioRepository.findById(id);
        return voluntario.getHabilidades().stream().mapToInt(HabilidadDocument::getPuntaje).average().orElse(0.0);

    }

    public List<HabilidadDocument> getSkillsUser(String id){
        VoluntarioDocument voluntarioDocument = voluntarioRepository.findById(id);
        List<HabilidadDocument> habilidades = voluntarioDocument.getHabilidades();
        return habilidades;
    }

    public List<HabilidadDocument> habilidades(String id){
        VoluntarioDocument voluntario = voluntarioRepository.findById(id);
        if(voluntario != null)
            return voluntarioRepository.getListHabilidades(id);
        else
            return null;
    }

    public String crearVoluntario(String nombre, String contrasena, List<String> codigosHabilidades){
        VoluntarioDocument voluntario = new VoluntarioDocument();
        HabilidadDocument habilidad;
        List<HabilidadDocument> habilidades = new ArrayList<HabilidadDocument>();
        voluntario.setNombre(nombre);
        voluntario.setContrasena(contrasena);

        for(String codigoActual : codigosHabilidades){
            habilidad = habilidadService.getByCodigo(codigoActual);
                if(habilidad != null){
                    habilidades.add(habilidad);
                }
        }
        System.out.println("Habilidades xd: " + habilidades);
        voluntario.setHabilidades(habilidades);
        return voluntarioRepository.crearVoluntario(voluntario);
    }

}
