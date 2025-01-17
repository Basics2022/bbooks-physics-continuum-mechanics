(continuum:kinematics)=
# Kinematics

Let
- $\vec{r}$ the physical space coordinates
- $\vec{r}_0$ the material coordinates, labels associated to material points of the continuum
- $\vec{r}_b$ arbitrary coordinates, labels associated to arbitrary points - e.g. geometric points

(continuum:kinematics:material-points)=
## Material points in physical space

**Position.** The position in physical space of material points labeled with material coordinates $\vec{r}_0$ can be written as a function

$$\vec{r}(\vec{r}_0, t) \ ,$$ (eq:r:r0-t)

providing the position in physical space of a material point, as a function of its label $\vec{r}_0$ and time $t$.

**Velocity.** The velocity of each material point is the time-derivative of function {eq}`eq:r:r0-t` at constant $\vec{r}_0$ (since one is interested here in the velocity of material points),

$$\vec{u} = \left.\dfrac{\partial \vec{r}}{\partial t}\right|_{\vec{r}_0} =: \dfrac{D \vec{r}}{D t} \ ,$$ (eq:vel)

having introduced the definition of **material derivative**, $\dfrac{D}{Dt} := \left.\dfrac{\partial}{\partial t}\right|_{\vec{r}_0}$.

```{admonition} Independent variables
In formula {eq}`eq:vel`, independent variables are not explicitly written. If $\vec{r}\left(\vec{r}_0, t\right)$, the velocity field $\vec{u}$ can be readily written as functions of the same independent variables,

$$\vec{u}_0\left( \vec{r}_0, t\right) = \left.\dfrac{\partial \vec{r}}{\partial t}\right|_{\vec{r}_0}(\vec{r}_0, t) \ , $$

and it provides the velocity field as a function of the material coordinates, namely the **Lagrangian description**, following material points in their evolution in space.

Eulerian description of the problem requires physical properties to be written as functions of physical coordinates, $\vec{r}$, $t$. If the inverse transformation of {eq}`eq:r:r0-t` exists, it's possible to write $\vec{r}_0\left(\vec{r}, t\right)$, and the velocity field as

$$\vec{u}\left( \vec{r}, t\right) = \vec{u}_0\left( \vec{r}_0\left(\vec{r}, t\right), t\right) \ , $$

or, for invertible transformations,

$$\vec{u}_0\left( \vec{r}_0, t\right) = \vec{u}\left( \vec{r}\left(\vec{r}_0, t\right), t\right) \ , $$

having used indices to mathematcally discern functions of different independent variables, even if they represent the same phsyical quantity. In many situations, this inverse transformation between the position in physical space and the material coordinates is not well-defined, often for fluid systems or solid mechanics with (very) large deformations: in these cases, it's always (?) possible to update the reference configuration at some closer time instant in order to find a well-defined inverse transformation, if needed.

```

**Acceleration.** Acceleration of a material point labeled with material coordinate $\vec{r}_0$ is the second order derivative of the physical position {eq}`eq:r:r0-t` w.r.t. time $t$ keeping $\vec{r}_0$ constant, or the first order derivative of the velocity {eq}`eq:vel`,

$$\begin{aligned}
  \vec{a} = \left.\frac{\partial \vec{u}}{\partial t}\right|_{\vec{r}_0}
   & = \left.\frac{\partial \vec{r}}{\partial t}\right|_{\vec{r}_0} \cdot \left.\dfrac{\partial \vec{u}}{\partial \vec{r}}\right|_{t} + \left.\dfrac{\partial \vec{u}}{\partial t}\right|_{\vec{r}}   
     = \vec{u} \cdot \nabla \vec{u} + \dfrac{\partial \vec{u}}{\partial t} \ , 
\end{aligned}$$

having written the partial derivative in time at constant physical coordianate $\vec{r}$ as $\left.\dfrac{\partial }{\partial t}\right|_{\vec{r}} = \dfrac{\partial}{\partial t}$, and the gradient w.r.t. the physical coordinate as $\nabla_{\vec{r}} = \nabla$.


(continuum:kinematics:arbitrary-points)=
## Arbitrary points in physical space
Following the same process as the one used for [material points](continuum:kinematics:material-points), the position, the velocity and the acceleration of a set of arbitrary points labeled with $\vec{r}_b$ coordinates read

$$\begin{aligned}
  & \vec{r}\left( \vec{r}_b, t \right) \\
  \vec{u}_b = & \left.\frac{\partial \vec{r}}{\partial t}\right|_{\vec{r}_b} \\
  \vec{a}_b = & \left.\frac{\partial \vec{u}_b}{\partial t}\right|_{\vec{r}_b} = \frac{\partial \vec{u}_b}{\partial t} + \vec{u}_b \cdot \nabla \vec{u}_b
\end{aligned}$$

(continuum:kinematics:function-derivatives)=
## Time derivatives of a function from different descriptions
Coordinate transformations implies the rules to compute the relations between time derivatives of a field $f$ keeping physical, material or arbitrary coordinates constant, namely


$$\begin{aligned}
\dfrac{\partial}{\partial t}\bigg|_{\vec{r}_0} f(\vec{r}(\vec{r}_0, t), t) 
    = \dfrac{\partial f}{\partial t}\bigg|_{\vec{r}} +
    \dfrac{\partial \vec{r}}{\partial t}\bigg|_{\vec{r}_0} \cdot \dfrac{\partial f}{\partial \vec{r}}\bigg|_{t} 
    = \dfrac{\partial f}{\partial t}\bigg|_{\vec{r}} +
      \vec{u} \cdot \nabla f 
\end{aligned}$$

$$\begin{aligned}
\dfrac{\partial}{\partial t}\bigg|_{\vec{r}_b} f(\vec{r}(\vec{r}_b, t), t) 
    = \dfrac{\partial f}{\partial t}\bigg|_{\vec{r}} +
    \dfrac{\partial \vec{r}}{\partial t}\bigg|_{\vec{r}_b} \cdot \dfrac{\partial f}{\partial \vec{r}}\bigg|_{t} 
    = \dfrac{\partial f}{\partial t}\bigg|_{\vec{r}} +
      \vec{u}_b \cdot \nabla f 
\end{aligned}$$

and thus

$$
\dfrac{\partial}{\partial t}\bigg|_{\vec{r}_0} f =  
\dfrac{\partial}{\partial t}\bigg|_{\vec{r}  } f + \vec{u} \cdot \nabla f =  
\dfrac{\partial}{\partial t}\bigg|_{\vec{r}_b} f + ( \vec{u} - \vec{u}_b ) \cdot \nabla f \ . 
$$

(kinematics:two-points)=
## Kinematics of two points

$$\vec{r}_2(t) - \vec{r}_1(t) = \vec{r}\left(\vec{r}_{0,2}, t \right) - \vec{r}\left(\vec{r}_{0,1}, t \right)$$

$$\vec{v}_2(t) - \vec{v}_1(t) = \dfrac{d}{dt} \vec{r}_2(t) - \dfrac{d}{dt} \vec{r}_1(t)$$

strain velocity tensor

$$\mathbb{D} = \frac{1}{2} \left[ \nabla \vec{u} + \nabla^T \vec{u} \right]$$ (eq:strain-vel-tensor)
