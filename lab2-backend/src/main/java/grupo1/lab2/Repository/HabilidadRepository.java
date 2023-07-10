package grupo1.lab2.Repository;

import grupo1.lab2.Documents.HabilidadDocument;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabilidadRepository extends MongoRepository<HabilidadDocument, ObjectId> {
}
