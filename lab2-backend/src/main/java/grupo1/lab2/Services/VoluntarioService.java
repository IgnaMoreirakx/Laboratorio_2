package grupo1.lab2.Services;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Documents.VoluntarioDocument;
import grupo1.lab2.Repository.VoluntarioRepository;
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

    public double calcularPromedioHabilidades(String id) {
        VoluntarioDocument voluntario = voluntarioRepository.findById(id);
        return voluntario.getHabilidades().stream().mapToInt(HabilidadDocument::getPuntaje).average().orElse(0.0);

    }
}
