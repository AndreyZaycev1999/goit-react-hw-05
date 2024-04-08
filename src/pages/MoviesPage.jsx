import Loader from "../components/Loader/Loader";
import Error from "../components/ErrorMessage/ErrorMessage";
import MovieList from "../components/MovieList/MovieList";
import { useMovieSearch } from "../hooks/useMovieSearch";
import { requestMoviesByQuery } from "../services/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactFormSchema = Yup.object({
  searchTerm: Yup.string().required("The field must be filled").default(""),
});

const MoviesPage = () => {
  const { movies, ifLoading, isError, onSetSearchQuery } = useMovieSearch();

  async function fetchMoviesByQuery() {
    requestMoviesByQuery();
    // console.log(data);
  }
  fetchMoviesByQuery();

  const handleSubmit = (values) => {
    onSetSearchQuery(values.searchTerm);
  };

  return (
    <div>
      <Formik
        initialValues=""
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.contact_form}>
          <label className={css.label}>
            <Field
              className={css.input}
              type="text"
              name="searchTerm"
              required
            />
            <button className={css.button} type="submit"></button>
          </label>
          <ErrorMessage
            className={css.errorMessage}
            component="p"
            name="searchTerm"
          />
        </Form>
      </Formik>

      {ifLoading && <Loader />}
      {isError && <Error />}
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
