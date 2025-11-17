(solid-mechanics:small-displacements:beams:timoshenko)=
# Timoshenko beam

## Kinematic assumptions

Let $z$ coordinate the axial coordinate of a beam, and $x$, $y$ a pair of cartesian coordinates to represent the points on a beam section.

**Displacement.** Displacement of the points of a beam can written as

$$\begin{aligned}
  \mathbf{s}(x,y,z,t)
  & = \mathbf{s}_P(z,t) + \boldsymbol{\theta}(z,t) \times \mathbf{r}_P(x,y) + \mathbf{s}^{\nu + w}(x,y,z,t) = \\ 
  & = \mathbf{s}_P(z,t) + \hat{\mathbf{x}} \left( - y \theta_z \right) + \hat{\mathbf{y}} \left( x \theta_z \right) + \hat{\mathbf{z}} \left( + y \theta_x - x \theta_y \right) + \mathbf{s}^{\nu + w} \ ,
\end{aligned}$$

where the first two contributions represent a rigid motion of the section identified by the value $z$ of the axial coordinate, and $\mathbf{s}^{\nu + w}$ the contribution of strain (due to non-zero Poisson ration) and warping of the section. Here the vector $\mathbf{r}_P$(x,y) lies in the same section of referencce point $P$, i.e. $\mathbf{r}_P = (x-x_P) \hat{\mathbf{x}} + (y-y_P) \hat{\mathbf{y}}$, so that the motion of points on section $A(z)$ only depends on the displacement of $P(z)$ and the rotation of the section $A(z)$.


**Strain.**

$$\begin{aligned}
   \varepsilon_{zz} & = s'_{Pz} + y \theta'_x - x \theta'_y + s^{\nu+w}_{Pz/z} \\ 
   \varepsilon_{xx} & = s^{\nu+w}_{Px/x} \\
   \varepsilon_{yy} & = s^{\nu+w}_{Py/y} \\
 2 \varepsilon_{zx} & = s'_{Px} - \theta_y - y \theta'_z + s^{\nu+w}_{x/z} + s^{\nu+w}_{z/x} \\
 2 \varepsilon_{zy} & = s'_{Py} + \theta_x + x \theta'_z + s^{\nu+w}_{y/z} + s^{\nu+w}_{z/y} \\
 2 \varepsilon_{xy} & = s^{\nu+w}_{y/z} + s^{\nu+w}_{z/y} \\
\end{aligned}$$

## Balance equations

Balance equations for a beam can be obtained integrating indefinite balance equations for a 3-dimensional solid on the sections $A(z)$ of the beam, with some further assumption on non-rigid contributions to displacement.

Momentum equation 

$$\mathbf{\rho}_0 \ddot{\mathbf{s}} = \nabla \cdot \boldsymbol\sigma + \mathbf{f}$$

gives

$$\begin{aligned}
  \mathbf{0} 
& = - \int_{\Delta V} \rho_0 \ddot{\mathbf{s}} + \int_{\Delta V} \nabla \cdot \boldsymbol\sigma + \int_{\Delta V} \rho_0 \mathbf{g} = \\
& = - \Delta z \, \int_{A} \rho_0 \left( \ddot{\mathbf{s}}_P - \mathbf{r}_P \times \ddot{\boldsymbol{\theta}} \right)
    + \int_{A(z)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma + \int_{A(z+\Delta z)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma + \int_{\Delta A_{lat}} \hat{\mathbf{n}} \cdot \boldsymbol\sigma + \Delta z \, \int_{A} \rho_0 \mathbf{g} = \\
& = \Delta z \left[ - m \ddot{\mathbf{s}}_P - \mathbf{S}_{P} \cdot \ddot{\boldsymbol\theta} + \mathbf{F}' + \mathbf{f} \right]
\end{aligned}$$

Angular momentum equation

$$\mathbf{r}_P \times \mathbf{\rho}_0 \ddot{\mathbf{s}} = \mathbf{r}_P \times \left( \nabla \cdot \boldsymbol\sigma + \mathbf{f} \right)$$

gives

$$\begin{aligned}
  \mathbf{0} 
& = - \int_{\Delta V} \rho_0 \mathbf{r}_P \times \ddot{\mathbf{s}} + \int_{\Delta V} \mathbf{r}_P \times \nabla \cdot \boldsymbol\sigma + \int_{\Delta V} \rho_0 \mathbf{r}_P \times \mathbf{g} = \\
& = - \Delta z \, \int_{A} \rho_0 \mathbf{r}_P \times \left( \ddot{\mathbf{s}}_P - \mathbf{r}_P \times \ddot{\boldsymbol{\theta}} \right)
    + \dots \\
& = \Delta z \left[ - \mathbf{S}_P^T \cdot \ddot{\mathbf{s}}_P - \mathbf{I}_{P} \cdot \ddot{\boldsymbol\theta} + \mathbf{M}' + \hat{\mathbf{z}} \times \mathbf{F} + \mathbf{m} \right] \ .
\end{aligned}$$

```{dropdown} Contribution of stress to moment
:open:

$$\begin{aligned}
  \int_{V} \mathbf{r} \times \nabla \cdot \boldsymbol\sigma 
  & = \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} r_j \sigma_{lk/l} = \\
  & = \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} \left[  \left( r_j \sigma_{lk} \right)_{/l} - r_{j/l} \sigma_{lk} \right] = \\
  & = \hat{\mathbf{e}}_i \int_{\partial V} \varepsilon_{ijk} r_j n_l  \sigma_{lk} - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} r_{j/l} \sigma_{lk} = \\
  & = \int_{\partial V} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} \delta^{(2)}_{jl} \sigma_{lk} = \\
\end{aligned}$$

For an elementary beam element $\Delta z$, the first contribution contains internal moments on two sections at $z$ and $z+\Delta z$ and the contribution of the lateral surface, that can be summed with the volume contribution to get load from linear density loads,

$$\int_{\partial \Delta V} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) 
 = \Delta z \, \mathbf{M}'(z) + \Delta z \, \int_{\partial A} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma )  $$

The second contribution becomes (as $\delta^{(2)}_{xx} = \delta^{(2)}_{yy} = 1$, but $\delta^{(2)}_{zz} = 0$),

$$\begin{aligned}
 - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} \delta^{(2)}_{jl} \sigma_{lk} 
  & = - \int_{\Delta V} \left\{ \hat{\mathbf{z}} ( \sigma_{xy} - \sigma_{yx} ) + \hat{\mathbf{x}} ( \sigma_{yz} ) + \hat{\mathbf{y}} ( - \sigma_{xz} ) \right\} = \\
  & = \Delta z \left[ - \hat{\mathbf{x}} \, T_y + \hat{\mathbf{y}} \, T_x \right] = \\
  & = \Delta z \, \hat{\mathbf{z}} \times \mathbf{F} \ .
\end{aligned}$$


```

