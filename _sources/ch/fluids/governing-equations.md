(fluid-mechanics:governing-equations)=
# Governing Equations of Fluid Mechanics

## Newtonian Fluid
The differential conservative form of the governing equations of a [Newtonian fluid](fluid-mechanics:constutive-equations:newtonian) directly follows from the [governing equations of a continuum medium in differential form](continuum:principles-differential),

$$\begin{cases}
  \dfrac{\partial \rho }{\partial t} + \nabla \cdot \left( \rho \mathbf{u} \right) = 0 \\
  \dfrac{\partial }{\partial t} \left( \rho \mathbf{u} \right) +  \nabla \cdot \left( \rho \mathbf{u} \otimes \mathbf{u} \right) = \rho \mathbf{g} - \nabla \cdot \mathbb{T} \\
  \dfrac{\partial}{\partial t}  \left( \rho e^t \right) + \nabla \cdot \left( \rho e^t \mathbf{u} \right) = \rho \mathbf{g} \cdot \mathbf{u} + \nabla \cdot \left( \mathbb{T} \cdot \mathbf{u} \right) - \nabla \cdot \mathbf{q} + \rho r
\end{cases}$$

using the expression {eq}`eq:stress-newtonian` of the stress tensor of a Newtonian fluid, and the required constitutive equations and equations of state characterizing the behavior of the medium and required to get a well-defined mathematical problem, providing the expression of thermodynamic variables and heat conduction flux as a function of the primary variables of the problem. As an example, Fourier's law for heat conduction reads

$$\vec{q} = - k \nabla T \ ,$$

...
