package cl.carlos.agenda.model;

import lombok.Data;
import lombok.NonNull;

import javax.persistence.*;
import java.sql.Date;

@Entity(name="contacts")
@Data
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    @Column(nullable = false)
    private String firstName;

    @NonNull
    @Column(nullable = false)
    private String lastName;

    private Date initDate;

    public Contact() {
    }


}
