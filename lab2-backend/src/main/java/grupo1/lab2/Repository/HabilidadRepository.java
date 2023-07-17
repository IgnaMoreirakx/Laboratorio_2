package grupo1.lab2.Repository;

import grupo1.lab2.Documents.HabilidadDocument;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface HabilidadRepository {

    List<HabilidadDocument> findAll();

    String crearHabilidad(String nombre, String codigo, int puntaje);
    HabilidadDocument getByCodigo(String codigo);
}
