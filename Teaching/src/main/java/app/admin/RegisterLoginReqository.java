package app.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(path = "login")
@CrossOrigin
public interface RegisterLoginReqository  extends JpaRepository<RedisterLogin,Integer> {
}
