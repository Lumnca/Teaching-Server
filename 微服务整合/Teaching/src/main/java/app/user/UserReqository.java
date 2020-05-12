package app.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "user_info")
public interface UserReqository extends JpaRepository<User,String> {

}
