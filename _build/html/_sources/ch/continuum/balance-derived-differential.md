(continuum:governing-equations:primary-integral)=
# Differential Balance Equations of ddd physical quantities

Balance equations of kinetic energy, internal energy and entropy

$$k = \frac{|\vec{v}|^2}{2} \quad , \qquad e = e^t - k \quad , \qquad s = \dots$$

**Convective form - Lagrangian description in physical space.** Kinetic energy equation is derived multiplying the momentum equation by the velocity field; internal energy equation is derived subtracting kinetic energy equation from the total energy equation; <span style="color:red">entropy equation strongly depends on the constitutive equation of the material, as it's shown for elastic solids and Newtonian fluids</span>

$$\begin{aligned}
 & \rho \frac{D k}{D t} = \rho \vec{g} \cdot \vec{v} + \vec{v} \cdot \nabla \cdot \mathbb{T} \\
 & \rho \frac{D e}{D t} = \mathbb{T} : \nabla \vec{v} - \nabla \cdot \vec{q} + \rho r \\
 & \dots
\end{aligned}$$

**Conservative form - Eulerian description in physical space.**

$$\begin{aligned}
 & \frac{\partial }{\partial t}\left(\rho k\right) + \nabla \cdot \left( \rho k \vec{v} \right) = \rho \vec{g} \cdot \vec{v} + \vec{v} \cdot \nabla \cdot \mathbb{T} \\
 & \frac{\partial }{\partial t}\left(\rho e\right) + \nabla \cdot \left( \rho e \vec{v} \right) = \mathbb{T} : \nabla \vec{v} - \nabla \cdot \vec{q} + \rho r \\
 & \dots
\end{aligned}$$

**Arbitrary description in physical space.**

$$\begin{aligned}
 & \rho \left.\frac{\partial k}{\partial t}\right|_{\vec{r}_b} + \rho \left( \vec{v} - \vec{v}_b \right) \cdot \nabla k = \rho \vec{g} \cdot \vec{v} + \vec{v} \cdot \nabla \cdot \mathbb{T} \\
 & \rho \left.\frac{\partial e}{\partial t}\right|_{\vec{r}_b} + \rho \left( \vec{v} - \vec{v}_b \right) \cdot \nabla e = \mathbb{T} : \nabla \vec{v} - \nabla \cdot \vec{q} + \rho r \\
 & \dots
\end{aligned}$$


<!--
(continuum:governing-equations:primary-integral:lagrange)=
## Principles of classical mechanics for closed systems - Lagrangian description

(continuum:governing-equations:primary-integral:arbitrary)=
## Integral balance equations for arbitrary domains - arbitrary description

(continuum:governing-equations:primary-integral:euler)=
## Integral balance equations for control volumes - Eulerian description
-->

