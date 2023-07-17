package grupo1.lab2.Services;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Repository.HabilidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabilidadService {

    @Autowired
    HabilidadRepository habilidadRepository;
    public List<HabilidadDocument> getAll(){
        return habilidadRepository.findAll();
    }

    public String crearHabilidad(HabilidadDocument habilidadNueva){
        return habilidadRepository.crearHabilidad(habilidadNueva);
    }
}
