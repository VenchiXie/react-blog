import AppFooter from "@/components/AppFooter/AppFooter";
import AppLoading from "@/components/AppLoading/AppLoading";
import "@/styles/AppFriend.css";

/***
 * 个人项目页
 *  */
function AppFriend() {
  return (
    <section className="Friend">
      <article className="Friend-main">
        <h1>AppFriends page</h1>
        <AppLoading></AppLoading>
      </article>
      <AppFooter></AppFooter>
    </section>
  );
}

export default AppFriend;
