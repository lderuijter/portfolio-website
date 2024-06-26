import { CNav, CNavItem, CNavLink } from '@coreui/react';

function Navbar() {
  return (
    <CNav className="flex-column">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
  );
}

export default Navbar;