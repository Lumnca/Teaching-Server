package app.logger;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(path = "logs")
@CrossOrigin
@Service
public interface LogRep extends JpaRepository<Log,Long> {

}
