(fluid-mechanics:dimensional-analysis)=
# Non-dimensional Equations of Fluid Mechanics

If $\rho(P, s)$,

$$d \rho = \left(\frac{\partial \rho}{\partial P}\right)_s \, d P + \left(\dfrac{\partial \rho}{\partial s} \right)_{\rho} \, ds$$

$$\begin{cases}
  \dfrac{D \rho}{D t} + \rho \nabla \cdot \vec{v} = 0  \\
  \rho \dfrac{D \vec{v}}{D t} = \rho \vec{g} + \nabla \cdot \left( 2 \mu \mathbb{D} + \lambda (\nabla \cdot \vec{v}) \mathbb{I} \right)  \\
  \rho \dfrac{D e^t    }{D t} = \rho \vec{g} \cdot \vec{v} + \nabla \cdot \left( \mathbb{T} \cdot \vec{v} \right) - \nabla \cdot \vec{q} + \rho r \\
\end{cases}$$


