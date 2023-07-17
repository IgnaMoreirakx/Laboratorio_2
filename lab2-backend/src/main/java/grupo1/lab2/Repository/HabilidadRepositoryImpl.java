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
    public String crearHabilidad(String nombre, String codigo, int puntaje){
        HabilidadDocument habilidad = new HabilidadDocument();
        habilidad.setNombre(nombre);
        habilidad.setCodigo(codigo);
        habilidad.setPuntaje(puntaje);
        mongoTemplate.save(habilidad);
        return "La habilidad fue creada correctamente";
    }

    @Override
    public HabilidadDocument getByCodigo(String codigo){
        List<HabilidadDocument> habilidades= findAll();
        HabilidadDocument habilidadActual;
        String codigoActual;
        for(int i = 0; i < habilidades.size() ; i++){
            habilidadActual = habilidades.get(i);
            codigoActual = habilidadActual.getCodigo();
            if(codigoActual.equals(codigo))
                return habilidadActual;
        }
        return null;
    }
}
