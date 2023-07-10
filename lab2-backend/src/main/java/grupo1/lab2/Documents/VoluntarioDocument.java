package grupo1.lab2.Documents;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "voluntario")
public class VoluntarioDocument {
    @Id
    @Field("_id")
    private String id;

    @Field("nombre")
    private String nombre;

    @Field("contrasena")
    private String contrasena;

}
