import AppFooter from "@/components/AppFooter/AppFooter";
import AppLoading from "@/components/AppLoading/AppLoading";
import "@/styles/AppFiling.css";

/***
 * 归档页
 *  */
function AppFiling() {
  return (
    <section className="Filing">
      <article className="Filing-main">
        <h1>AppFiling page</h1>
        <AppLoading></AppLoading>
      </article>
      <AppFooter></AppFooter>
    </section>
  );
}

export default AppFiling;
