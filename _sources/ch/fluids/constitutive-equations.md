(fluid-mechanics:constutive-equations)=
# Constitutive Equations of Fluid Mechanics

(fluid-mechanics:constutive-equations:newtonian)=
## Newtonian Fluids

A Newtonian fluid is the model of a fluid as a continuous medium whose stress tensor can be written as the sum of the hydrostatic pressure stress tensor $-p \mathbb{I}$ - the only contribution holding in [statics](fluid-mechanics:statics) - and a viscous stress tensor $\mathbb{S}$

$$\mathbb{T} = -p \mathbb{I} + \mathbb{S} \ ,$$

and the viscous stress tensor is isotropic and **linear** in the first-order spatial derivatives of the velocity field,

$$\mathbb{S} = 2 \mu \mathbb{D} + \lambda (\nabla \cdot \vec{u}) \mathbb{I} \ ,$$ (eq:stress-viscous)

being $\mu, \lambda$ the viscosity coefficients, and $\mathbb{D}$ the strain velocity tensor {eq}`eq:strain-vel-tensor`. Thus, the definition 

```{prf:definition} Newtonian fluid
A Newtonian fluid is a continuous medium whose stress tensor reads

$$\mathbb{T} = - p \mathbb{I} + 2 \mu \mathbb{D} + \lambda (\nabla \cdot \vec{u}) \mathbb{I} \ .$$ (eq:stress-newtonian)

```

```{note} 
The expression {eq}`eq:stress-viscous` of the viscosity stress tensor is the most general expression of a 2-nd order symmetric isotropic tensor proportional to 1-st order derivatives of a vector field.
```
