function App() {
  return (
    <div className="App">
      <header className="nav-top">
        <nav className="menu">
          <button><i class="fa fa-home"></i></button>
          <button><i class="fa fa-bars"></i> Menu</button>
        </nav>
        <nav className="menu">
          <button className="btn">
            Profile
            <img src="https://2.gravatar.com/avatar/b178e268e7dc77ab616abe3e88074b8b0c12563b545a6459f6e4855e9018d7af?s=64&amp;d=identicon&amp;r=G" width="25" className="image" />
          </button>
        </nav>
      </header>
      <Conteiner />
    </div>
  );
}

export default App;

function NavContent() {
  return (
    <header className="nav-side">
      <nav className="menu">
        <button>Dashboard</button>
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </nav>
    </header>
  );
}

function Conteiner() {
  return (
    <div className="conteiner">
      <NavContent />
      <Content>
        <Text />
      </Content>
    </div>
  );
}

function Content({ children }) {
  return (
    <main className="content">
      {children}
    </main>
  );
}



function Text() {
  return (
    <div>
      <h2>Menu</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta orci sed sem luctus, eu luctus diam commodo. Mauris id blandit quam, fringilla placerat mauris. In iaculis id est non tincidunt. Cras vel mi tellus. Integer eleifend at ante eget eleifend. Aenean gravida nisi ipsum, luctus maximus risus laoreet vitae. Etiam ultricies lobortis elit. Maecenas dignissim semper pharetra. Ut vitae elit sit amet sem ullamcorper tincidunt. Etiam nec facilisis mi, sit amet condimentum ex. Aliquam vehicula condimentum nibh, at congue lectus molestie vel.</p>

      <p>Maecenas erat dolor, tristique in orci vitae, maximus bibendum urna. Quisque libero lorem, commodo in euismod ac, pharetra quis neque. Mauris vitae gravida massa. Vestibulum tincidunt malesuada ipsum, a pulvinar sapien maximus in. Proin a orci quam. Sed quis venenatis ex. Fusce lacus mi, mollis sed finibus nec, ultrices ut nunc. Integer suscipit lorem a risus feugiat feugiat. Pellentesque luctus malesuada justo, sed dapibus ante blandit sit amet. Vestibulum et nisl libero.</p>

      <p>Phasellus volutpat commodo nibh, et ultrices sapien hendrerit eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras porta ornare lacus vel gravida. In ornare molestie mauris non maximus. Donec et arcu eu est dapibus euismod a eu nisl. Integer sit amet convallis libero, sed pulvinar dolor. Pellentesque sodales lacus non purus tristique, quis gravida eros pellentesque. Suspendisse vestibulum suscipit ligula laoreet euismod. Sed fringilla est neque, convallis sollicitudin dui gravida dictum.</p>

      <p>Morbi fringilla metus maximus laoreet vulputate. Quisque ac consectetur magna, vitae maximus dui. Vestibulum varius, lorem sed luctus volutpat, sapien ante iaculis tortor, tincidunt ornare neque enim et quam. Sed interdum mauris a nibh iaculis, vel interdum eros placerat. Sed mollis nibh enim, eget consectetur magna condimentum id. Praesent vitae tortor lacinia, tincidunt massa sed, tempor quam. Pellentesque nisi eros, malesuada sit amet justo quis, commodo pellentesque quam. Ut volutpat nibh id sapien ultricies, congue malesuada tellus ultricies. Ut fermentum mauris id laoreet dictum. Integer eget rhoncus dui, in sodales mauris.</p>

      <p>Nulla efficitur, ante a tempus fermentum, leo tellus volutpat nibh, vel venenatis felis arcu sit amet tortor. In quis lacus neque. Sed rutrum, elit vehicula convallis ultricies, magna sapien consequat risus, nec sodales tortor magna ac lacus. Donec suscipit nisi gravida nulla viverra, mattis posuere erat fringilla. Nam sit amet diam urna. Proin efficitur lectus quis arcu convallis consectetur. Pellentesque ornare, tortor accumsan mollis finibus, purus urna porta nisl, non cursus diam neque sit amet nisi. Nunc finibus, tortor id molestie iaculis, leo est iaculis nulla, ac porta nibh mi interdum augue. Nam rutrum ultricies sem, a aliquet lacus porttitor ac.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta orci sed sem luctus, eu luctus diam commodo. Mauris id blandit quam, fringilla placerat mauris. In iaculis id est non tincidunt. Cras vel mi tellus. Integer eleifend at ante eget eleifend. Aenean gravida nisi ipsum, luctus maximus risus laoreet vitae. Etiam ultricies lobortis elit. Maecenas dignissim semper pharetra. Ut vitae elit sit amet sem ullamcorper tincidunt. Etiam nec facilisis mi, sit amet condimentum ex. Aliquam vehicula condimentum nibh, at congue lectus molestie vel.</p>

      <p>Maecenas erat dolor, tristique in orci vitae, maximus bibendum urna. Quisque libero lorem, commodo in euismod ac, pharetra quis neque. Mauris vitae gravida massa. Vestibulum tincidunt malesuada ipsum, a pulvinar sapien maximus in. Proin a orci quam. Sed quis venenatis ex. Fusce lacus mi, mollis sed finibus nec, ultrices ut nunc. Integer suscipit lorem a risus feugiat feugiat. Pellentesque luctus malesuada justo, sed dapibus ante blandit sit amet. Vestibulum et nisl libero.</p>

      <p>Phasellus volutpat commodo nibh, et ultrices sapien hendrerit eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras porta ornare lacus vel gravida. In ornare molestie mauris non maximus. Donec et arcu eu est dapibus euismod a eu nisl. Integer sit amet convallis libero, sed pulvinar dolor. Pellentesque sodales lacus non purus tristique, quis gravida eros pellentesque. Suspendisse vestibulum suscipit ligula laoreet euismod. Sed fringilla est neque, convallis sollicitudin dui gravida dictum.</p>

      <p>Morbi fringilla metus maximus laoreet vulputate. Quisque ac consectetur magna, vitae maximus dui. Vestibulum varius, lorem sed luctus volutpat, sapien ante iaculis tortor, tincidunt ornare neque enim et quam. Sed interdum mauris a nibh iaculis, vel interdum eros placerat. Sed mollis nibh enim, eget consectetur magna condimentum id. Praesent vitae tortor lacinia, tincidunt massa sed, tempor quam. Pellentesque nisi eros, malesuada sit amet justo quis, commodo pellentesque quam. Ut volutpat nibh id sapien ultricies, congue malesuada tellus ultricies. Ut fermentum mauris id laoreet dictum. Integer eget rhoncus dui, in sodales mauris.</p>

      <p>Nulla efficitur, ante a tempus fermentum, leo tellus volutpat nibh, vel venenatis felis arcu sit amet tortor. In quis lacus neque. Sed rutrum, elit vehicula convallis ultricies, magna sapien consequat risus, nec sodales tortor magna ac lacus. Donec suscipit nisi gravida nulla viverra, mattis posuere erat fringilla. Nam sit amet diam urna. Proin efficitur lectus quis arcu convallis consectetur. Pellentesque ornare, tortor accumsan mollis finibus, purus urna porta nisl, non cursus diam neque sit amet nisi. Nunc finibus, tortor id molestie iaculis, leo est iaculis nulla, ac porta nibh mi interdum augue. Nam rutrum ultricies sem, a aliquet lacus porttitor ac.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta orci sed sem luctus, eu luctus diam commodo. Mauris id blandit quam, fringilla placerat mauris. In iaculis id est non tincidunt. Cras vel mi tellus. Integer eleifend at ante eget eleifend. Aenean gravida nisi ipsum, luctus maximus risus laoreet vitae. Etiam ultricies lobortis elit. Maecenas dignissim semper pharetra. Ut vitae elit sit amet sem ullamcorper tincidunt. Etiam nec facilisis mi, sit amet condimentum ex. Aliquam vehicula condimentum nibh, at congue lectus molestie vel.</p>

      <p>Maecenas erat dolor, tristique in orci vitae, maximus bibendum urna. Quisque libero lorem, commodo in euismod ac, pharetra quis neque. Mauris vitae gravida massa. Vestibulum tincidunt malesuada ipsum, a pulvinar sapien maximus in. Proin a orci quam. Sed quis venenatis ex. Fusce lacus mi, mollis sed finibus nec, ultrices ut nunc. Integer suscipit lorem a risus feugiat feugiat. Pellentesque luctus malesuada justo, sed dapibus ante blandit sit amet. Vestibulum et nisl libero.</p>

      <p>Phasellus volutpat commodo nibh, et ultrices sapien hendrerit eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras porta ornare lacus vel gravida. In ornare molestie mauris non maximus. Donec et arcu eu est dapibus euismod a eu nisl. Integer sit amet convallis libero, sed pulvinar dolor. Pellentesque sodales lacus non purus tristique, quis gravida eros pellentesque. Suspendisse vestibulum suscipit ligula laoreet euismod. Sed fringilla est neque, convallis sollicitudin dui gravida dictum.</p>

      <p>Morbi fringilla metus maximus laoreet vulputate. Quisque ac consectetur magna, vitae maximus dui. Vestibulum varius, lorem sed luctus volutpat, sapien ante iaculis tortor, tincidunt ornare neque enim et quam. Sed interdum mauris a nibh iaculis, vel interdum eros placerat. Sed mollis nibh enim, eget consectetur magna condimentum id. Praesent vitae tortor lacinia, tincidunt massa sed, tempor quam. Pellentesque nisi eros, malesuada sit amet justo quis, commodo pellentesque quam. Ut volutpat nibh id sapien ultricies, congue malesuada tellus ultricies. Ut fermentum mauris id laoreet dictum. Integer eget rhoncus dui, in sodales mauris.</p>

      <p>Nulla efficitur, ante a tempus fermentum, leo tellus volutpat nibh, vel venenatis felis arcu sit amet tortor. In quis lacus neque. Sed rutrum, elit vehicula convallis ultricies, magna sapien consequat risus, nec sodales tortor magna ac lacus. Donec suscipit nisi gravida nulla viverra, mattis posuere erat fringilla. Nam sit amet diam urna. Proin efficitur lectus quis arcu convallis consectetur. Pellentesque ornare, tortor accumsan mollis finibus, purus urna porta nisl, non cursus diam neque sit amet nisi. Nunc finibus, tortor id molestie iaculis, leo est iaculis nulla, ac porta nibh mi interdum augue. Nam rutrum ultricies sem, a aliquet lacus porttitor ac.</p>
    </div >
  )
}