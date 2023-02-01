export function AppFooter() {
  return (
    <section className="app-footer">
      <div className="flex row">
        <div>
          <div>My Team</div>
          <div>
            <ul>
              <li>
                {" "}
                <a href="#">home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">about</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>987 Hillcrest Lane</li>
            <li>Irvine, CA</li>
            <li>California 92714</li>
            <li>Call Us : 949-833-7432</li>
          </ul>
        </div>
        <div>
          <div>
            <ul>
              <li>FB Icon</li>
              <li>Pinterest</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div>Copyright 2020. All Rights Reserved</div>
        </div>
      </div>
    </section>
  );
}
