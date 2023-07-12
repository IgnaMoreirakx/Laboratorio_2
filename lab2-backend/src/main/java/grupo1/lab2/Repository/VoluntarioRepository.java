package grupo1.lab2.Repository;

import grupo1.lab2.Documents.VoluntarioDocument;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoluntarioRepository extends MongoRepository<VoluntarioDocument, ObjectId> {

    default VoluntarioDocument findById(String id) {
        return findById(new ObjectId(id)).orElse(null);
    }
}
