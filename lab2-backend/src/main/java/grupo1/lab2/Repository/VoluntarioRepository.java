package grupo1.lab2.Repository;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Documents.VoluntarioDocument;

import java.util.List;

public interface VoluntarioRepository {

    List<VoluntarioDocument> findAll();

    VoluntarioDocument findById(String id);

    List<HabilidadDocument> getListHabilidades(String id);

    String crearVoluntario(VoluntarioDocument voluntario);

}
