package grupo1.lab2.Repository;

import grupo1.lab2.Documents.HabilidadDocument;
import grupo1.lab2.Documents.VoluntarioDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class VoluntarioRepositoryImpl implements VoluntarioRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<VoluntarioDocument> findAll(){
        return mongoTemplate.findAll(VoluntarioDocument.class);
    }

    @Override
    public VoluntarioDocument findById(String id){
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        return mongoTemplate.findOne(query, VoluntarioDocument.class);
    }

    @Override
    public List<HabilidadDocument> getListHabilidades(String id){
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        VoluntarioDocument voluntario = mongoTemplate.findOne(query, VoluntarioDocument.class);
        return voluntario != null ? voluntario.getHabilidades() : null;
    }

    @Override
    public String crearVoluntario(VoluntarioDocument voluntarioDocument){
        VoluntarioDocument voluntarioNuevo = mongoTemplate.save(voluntarioDocument);
        if(voluntarioNuevo.equals(null)){
            return "No se puedo guardar el voluntario";
        }
        else{
            return "Voluntario guardado correctamente";
        }
    }


}
