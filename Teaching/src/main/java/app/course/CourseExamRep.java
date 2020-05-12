package app.course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin
@RepositoryRestResource(path = "exams")
public interface CourseExamRep extends JpaRepository<CourseExam,Integer> {
}
