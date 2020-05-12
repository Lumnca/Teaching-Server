package app.course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(path = "examsubmit")
public  interface  ExamSubmitRep extends JpaRepository<ExamSubmit,Integer>{

}