(fluid-mechanics:incompressible)=
# Incompressible Fluid Mechanics

Chapter of a introductory course in incompressible fluid mechanics:
- statics
- kinematics
- governing equations
- non-dimensional equations
- vorticity dynamics
- low-$Re$ exact solutions
- high-$Re$ flows, incompressible inviscid irrotational flows:
  - vorticity dynamics and Bernoulli theorems
  - aeronautical applications
- boundary layer
- instability and turbulence 

(fluid-mechanics:incompressible:ns-eqn)=
## Navier-Stokes Equations

The kinematic constraints (link to [Non-dimensional Equations of Fluid Mechanics](fluid-mechanics:dimensional-analysis)?)

$$\nabla \cdot \vec{v} = 0$$

replaces mass balance in the governing equation and implies $\frac{D \rho}{D t} = 0$, i.e. all the material particles have constant density in time.

If ...

$$\begin{cases}
\rho \left[ \frac{\partial \vec{u}}{\partial t} + \vec{u} \cdot \nabla ) \vec{u} \right] - \mu \nabla^2 \vec{u} + \nabla P = \rho \vec{g} \\
\nabla \cdot \vec{u} = 0
\end{cases}$$ (eq:ns-eqn)

with the proper initial conditions, boundary conditions and - if required - [compatibility conditions](fluid-mechanics:incompressible:compatibility).

(fluid-mechanics:incompressible:compatibility)=
```{dropdown} Compatibility condition
A compatibility condition is needed if the velocity field is prescribed on the whole boundary $\partial V$ of the domain $V$,

$$\vec{u}\bigg|_{\partial V} = \vec{b}_n \ .$$

The compatibility condition reads

$$\oint_{\partial V} \vec{b}  \cdot \hat{n} = 0 \ ,$$

to ensure that the conudary conditions are consistent with the incompressibility constraint, as it is readily proved using divergence theorem on the velocity field in $V$,

$$0 \equiv \int_V \underbrace{\nabla \cdot \vec{u}}_{= 0} = \oint_{\partial V} \hat{v} \cdot \hat{n} = \oint_{\partial V} \vec{b} \cdot \hat{n} \ .$$
```

(fluid-mechanics:incompressible:vorticity)=
## Vorticity
A dynamical equation for vorticity $\vec{\omega} := \nabla \times \vec{u}$ reailty follows taking the curl of Navier-Stokes equations {eq}`eq:ns-eqn`

$$\frac{D \vec{\omega}}{D t} = (\vec{\omega} \cdot \nabla) \vec{u} + \nu \Delta \vec{\omega} \ ,$$ (eq:vorticity)

i.e. vorticity can be stretched-tilted by the term $(\vec{\omega} \cdot \nabla) \vec{u}$, or diffused by the term $\nu \Delta \vec{\omega}$.

...

(fluid-mechanics:incompressible:vorticity)=
## Bernoulli theorems
For an incompressible fluid, the advective term $(\vec{u} \cdot \nabla) \cdot \vec{u}$ can be recasted as 

$$(\vec{u} \cdot \nabla) \cdot \vec{u} = \vec{\omega} \times \vec{u} + \nabla \frac{|\vec{u}|^2}{2} \ ,$$

so that the momentum equation in Navier-Stokes equations {eq}`eq:ns-eqn` for fluids with uniform density $\rho$ reads

$$ \rho \left[ \frac{\partial \vec{u}}{\partial t} + \vec{\omega} \times \vec{u} + \nabla \frac{|\vec{u}|^2}{2} \right] - \mu \Delta \vec{u} + \nabla P = \rho \vec{g} \ .$$ (eq:ns-mom-bernoulli)

Starting from the form {eq}`eq:ns-mom-bernoulli`, different forms of Bernoulli theorems are readilty derived with the proper assumptions.

```{prf:theorem} Bernoulli theorem along path and vortex lines in steady flows
In a steady incompressible inviscid flow with conservative volume forces, $\vec{g} = - \nabla \chi$, the Bernoulli polynomial is constant along path (everywhere tangent to the velocity field, $\hat{t}(\vec{r}) \parallel \vec{u}(\vec{r})$) and vortex lines (everywhere tangent to the vorticity field, $\hat{t}(\vec{r}) \parallel \vec{\omega}(\vec{r})$), i.e. the directional derivative of the Bernoulli polynomial in the direction of the velocity or the vorticity field is identically zero,

$$\hat{t} \cdot \nabla \left( \frac{|\vec{u}|^2}{2} + \frac{P}{\rho} + \chi \right) = 0 \ .$$

```
    
The proof readily follows taking the scalar product with a unit-norm vector $\hat{t}$ parallel to the local velocity or vorticity, and noting that $\hat{t} \cdot \vec{u} \times \vec{\omega}$ is zero if either $\hat{t} \parallel \vec{v}$ or $\hat{t} \parallel \vec{\omega}$.

```{prf:theorem} Bernoulli theorem in irrotational inviscid steady flows
In a steady incompressible inviscid irrotational flow with conservative volume forces, $\vec{g} = - \nabla \chi$, the Bernoulli polynomial is uniform in the whole domain, since its gradient is identically zero

$$\nabla \left( \frac{|\vec{u}|^2}{2} + \frac{P}{\rho} + \chi \right) = 0 
\qquad \rightarrow \qquad \frac{|\vec{u}|^2}{2} + \frac{P}{\rho} + \chi = 0 \ .$$
```

```{prf:theorem} Bernoulli theorem in irrotational inviscid flows
In an incompressible inviscid irrotational flow with conservative volume forces, $\vec{g} = - \nabla \chi$, the Bernoulli polynomial is uniform in the connected irrotational regions of the domain - but not constant in time in general - , since its gradient is identically zero

$$\nabla \left( \frac{\partial \phi}{\partial t} + \frac{|\vec{u}|^2}{2} + \frac{P}{\rho} + \chi \right) = 0 
\qquad \rightarrow \qquad \frac{\partial \phi}{\partial t} + \frac{|\vec{u}|^2}{2} + \frac{P}{\rho} + \chi = C(t) \ .$$

being $\phi$ the velocity potential used to write the irrotational velocity field as the gradient of a scalar function $\vec{u} = \nabla \phi$.
```


```{note}
The assumption of inviscid flow is not directly required if irrotationality holds. Anyway the inviscid flow assumption may be required to make irrotationality condition holds. Lookinig at the vorticity equation {eq}`eq:vorticity` the assumption of negligible viscosity prevents diffusion of vorticity from rotational regions to irrotational regions.
```

```{note}
A barotropic fluid is defined as a fluid where the pressure is a function of density only, $P(\rho)$. For this kind of flows it's possible to find a function $\Pi$ so that

$$d \Pi = \frac{d P}{\rho} \ .$$

The results of this section derived for a uniform density flow hold for a barotropic fluid as well, replacing $\frac{P}{\rho}$ with $\Pi$. 
```
