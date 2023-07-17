package grupo1.lab2.Repository;

import grupo1.lab2.Documents.HabilidadDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HabilidadRepositoryImpl implements HabilidadRepository{

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<HabilidadDocument> findAll(){
        return mongoTemplate.findAll(HabilidadDocument.class);
    }

    @Override
    public String crearHabilidad(HabilidadDocument habilidadNueva){
        HabilidadDocument habilidad = mongoTemplate.save(habilidadNueva);
        if(habilidad.equals(null)){
            return "No fue posible crear la habilidad";
        }
        else{
            return "Fue creada correctamente la habilidad";
        }
    }
}
