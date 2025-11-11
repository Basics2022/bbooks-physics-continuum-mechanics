(fluid-mechanics:compressible)=
# Compressible Fluid Mechanics

(fluid-mechanics:compressible:inviscid)=
## Compressible Inviscid Fluid Mechanics

(fluid-mechanics:compressible:inviscid:shocks)=
### Shocks


(fluid-mechanics:compressible:inviscid:quasi-1d)=
### Quasi-1d flows

If no shock occurs in the flow, Euler equations in differential form governs the dynamics of the flow

$$\begin{cases}
  \partial_t \rho + \nabla \cdot (\rho \vec{u}) = 0 \\
  \partial_t \left( \rho \vec{u} \right) + \nabla \cdot (\rho \vec{u} \otimes \vec{u} + P \mathbb{I}) = 0 \\
  \partial_t \left( \rho e^t \right) + \nabla \cdot (\rho \vec{u} h^t) = 0 \\
\end{cases}$$

Quasi-1d model for steady flows is a simple model that provides good-enough results for flows delimited by streamlines that varies gently in the streamwise direction (or by solid walls, in the limit of the high-Reynolds flow without separations, where viscous effects are confined to a thin region - boundary layer - close to the walls).

This model is derived integrating over the sections of the stream tube, so that the physical quantities are functions of the streamwise coordinate $x$ only. Integration over an elementary volume between sections at $x$ and $x+dx$ of the mass and momentum equations, in steady conditions, gives

$$\begin{cases}
  d (\rho u A) = 0 \\
  d (\rho u^2 A) + d (P A) + \displaystyle\int_{S_{lat}(x,dx)} P n_x = 0 \ ,
\end{cases}$$

where the last equation comes from the contribution of the lateral surfaces, that has non zero contribution in the streamwise component of momentum equation if sections is not constant, and thus the unit normal vector $\hat{n}$ on the lateral surface has non-zero $x$-component $n_x$. This contribution on the elementary lateral surface (where pressure is assumed to be uniform), can be evaluated summing and subracting the contributions on the $A(x)$ and $A(x+dx)$ surface, 

$$\underbrace{\displaystyle\int_{S_{lat}(x,dx)} P n_x + P (A+dA) - P A}_{ = P \oint_{\partial V} n_x = 0 } - P(A+dA) + PA =  - P dA $$

Thus the equations become

$$\begin{cases}
  0 = d (\rho u A) = 0 \\
  0 = d (\rho u^2 A) + A dP = \rho u A \, du + A \, dP \ ,
\end{cases}$$

having used the mass equation to simplify the first term in the momentum equation, since

 $$d(\rho u^2 A) = \underbrace{d(\rho u A)}_{=0} u + \rho u A \, du \ .$$

Now, from momentum equation a relation from changes in velocity and pressure holds

 $$\rho u \, du = - dP \ .$$

If the flow is isentropic (i.e. negligible viscous effects, no heat conduction, no shocks), $s = \overline{s}$, the definition of the speed of sound

$$c^2(\rho, s) = \left( \frac{\partial P}{\partial \rho} \right)_s \ ,$$

can be used to write a relation between changes in pressure and density $d P = c^2 d \rho$. Using this formula and mass equation $d(\rho u A) = 0$, it's possible to write relations between physical quantities and the variation of the section of the stream tube. Mass equation can be recast as

$$\begin{aligned}
  0 & = \dfrac{dA}{A} + \dfrac{d \rho}{\rho} + \dfrac{d u}{u} = \\
    & = \dfrac{dA}{A} + \frac{1}{c^2} \dfrac{d P}{\rho} + \dfrac{d u}{u} = \\
    & = \dfrac{dA}{A} + \frac{1}{c^2} \dfrac{d P}{\rho} - \dfrac{d P}{\rho u^2} 
\end{aligned}$$

and thus, introducing Mach number $M := \dfrac{u}{c}$,

$$\dfrac{d A}{A} = (1 - M^2)\dfrac{dP}{\rho u^2} = -(1 - M^2)\dfrac{du}{u} \ .$$

From this equation, it's immediate to realize that:
- for subsonic flows $M<1$, if section of the stream tube increases, $dA > 0$, thus velocity descreases $du < 0$, and pressure increases $dP > 0$, and viceversa
- for supersonic flows $M>1$, if section of the stream tube increases, $dA > 0$, thus velocity increases $du > 0$, and pressure decreases $dP < 0$
