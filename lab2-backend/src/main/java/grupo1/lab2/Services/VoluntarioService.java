package grupo1.lab2.Services;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Documents.VoluntarioDocument;
import grupo1.lab2.Repository.VoluntarioRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoluntarioService {
    @Autowired
    VoluntarioRepository voluntarioRepository;
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

    public String crearVoluntario(VoluntarioDocument voluntarioNuevo){
        return voluntarioRepository.crearVoluntario(voluntarioNuevo);
    }

}
