import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
function Nav() {
    const navigate = useNavigate();
  return (
    <>
     <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
  <div class=" p-2">
      <Link to='./notes' class='note-nav'>Notes</Link>
    </div>
    <div class=" p-2">
      <h5 class="h4" onClick={()=>navigate("/trash")}><i class="fa-solid fa-trash"></i></h5>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    </>
  );
}

export default Nav;