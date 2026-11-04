(solid-mechanics:small-displacements:plates-shells:stress-strain-state)=
# Stress and strain state in 2-dimensional structural elements

(solid-mechanics:small-displacements:plates-shells:stress-strain-state:linear-elastic)=
## Constitutive law for a linear elastic isotropic medium

Without thermal deformations, the linear elastic constitutive law is

$$\boldsymbol\sigma = 2 \mu \boldsymbol\varepsilon + \lambda \text{tr}\{ \boldsymbol\varepsilon \} \mathbf{I} \ ,$$

with $\mu$, $\lambda$ the **Lamé coefficients.** Taking the trace of both sides, $\text{tr}\{ \boldsymbol\sigma \} = \left( 2 \mu + 3 \lambda \right) \text{tr}\{ \boldsymbol\varepsilon \}$, it's easy to find the inverse relation

$$\boldsymbol\varepsilon = \frac{1}{2 \mu} \boldsymbol{\sigma} - \frac{\lambda}{2 \mu ( 2 \mu + 3 \lambda )} \text{tr}\{ \boldsymbol\sigma \} \mathbf{I} \ .$$

The decomposition of these tensors as the sum of an isotropic and a deviatoric part reads

$$\boldsymbol\sigma = \boldsymbol\sigma^{\rm iso} + \boldsymbol\sigma^{\rm dev} = \left( \frac{2}{3} \mu + \lambda \right) \text{tr} \{ \boldsymbol{\varepsilon} \} \mathbf{I} + \left( 2 \mu \boldsymbol{\varepsilon} - \frac{2}{3} \mu \text{tr}\{ \boldsymbol{\varepsilon} \} \mathbf{I} \right) \ .$$

(solid-mechanics:small-displacements:plates-shells:stress-strain-state:linear-elastic:engineering)=
### Engineering notation

Both stress and strain tensors are 2-nd order symmetric tensors, and thus they have 6 independent components. The Cartesian components of the (physical, as they're tensors as they behave like tensors under a change of coordinates) tensors are collected in $6$-dimensional (mathematical, as they don't behave like vectors under change of coordinates) vectors so that the linear elastic constitutive law becomes

$$
\begin{bmatrix} \varepsilon_{xx} \\ \varepsilon_{yy} \\ \varepsilon_{zz} \\ \varepsilon_{xy} \\ \varepsilon_{zy} \\ \varepsilon_{zx}  \end{bmatrix}
=
\begin{bmatrix}
 \frac{ 1 }{E} &-\frac{\nu}{E} &-\frac{\nu}{E} & \cdot & \cdot & \cdot \\
-\frac{\nu}{E} & \frac{ 1 }{E} &-\frac{\nu}{E} & \cdot & \cdot & \cdot \\
-\frac{\nu}{E} &-\frac{\nu}{E} & \frac{ 1 }{E} & \cdot & \cdot & \cdot \\
 \cdot & \cdot & \cdot & \frac{1}{2 G} & & \\
 \cdot & \cdot & \cdot & & \frac{1}{2 G} & \\
 \cdot & \cdot & \cdot & & & \frac{1}{2 G} \\
\end{bmatrix}
\begin{bmatrix} \sigma_{xx} \\ \sigma_{yy} \\ \sigma_{zz} \\ \sigma_{xy} \\ \sigma_{zy} \\ \sigma_{zx} \end{bmatrix}
$$

or

$$
\begin{bmatrix} \sigma_{xx} \\ \sigma_{yy} \\ \sigma_{zz} \\ \sigma_{xy} \\ \sigma_{zy} \\ \sigma_{zx} \end{bmatrix} =
  \frac{E}{(1+\nu)(1-2\nu)}
\begin{bmatrix}
  1-\nu &   \nu &   \nu & \cdot & \cdot & \cdot \\
    \nu & 1-\nu &   \nu & \cdot & \cdot & \cdot \\
    \nu &   \nu & 1-\nu & \cdot & \cdot & \cdot \\
 \cdot & \cdot & \cdot & 1-2\nu & & \\
 \cdot & \cdot & \cdot & & 1-2\nu & \\
 \cdot & \cdot & \cdot & & & 1-2\nu \\
\end{bmatrix}
\begin{bmatrix} \varepsilon_{xx} \\ \varepsilon_{yy} \\ \varepsilon_{zz} \\ \varepsilon_{xy} \\ \varepsilon_{zy} \\ \varepsilon_{zx}  \end{bmatrix}
$$

with $G = \frac{E}{2(1+\nu)}$.

```{dropdown} Details about pairs of independent coefficients

with

$$\begin{aligned}
\frac{1}{E} & = \frac{1}{2 \mu} - \frac{\lambda}{2 \mu ( 2 \mu + 3 \lambda)} = \frac{2 \mu + 3 \lambda - \lambda}{2 \mu ( 2 \mu + 3 \lambda)} = \frac{\mu + \lambda}{\mu ( 2 \mu + 3 \lambda) } \\
\frac{1}{m E} & = \frac{\lambda}{2 \mu ( 2 \mu + 3 \lambda)} \\
\nu = \frac{1}{m} & = \frac{1}{m E} E = \frac{\lambda}{2 ( \mu + \lambda )}
\end{aligned}$$

or $\frac{1}{2\mu} = \frac{1}{E} + \frac{1}{mE} = \frac{1+\nu}{E}$. With $G := \mu$, then

$$G = \frac{E}{2 ( 1 + \nu ) } \ .$$

Inverting the relations above,

$$
\lambda = 2 \nu G + 2 \nu \lambda
\quad \rightarrow \quad
\lambda = \frac{2 \nu}{1 - 2 \nu} G = \frac{\nu}{(1+\nu)(1-2\nu)} E
$$

and

$$\begin{aligned}
  2 G + \lambda 
  & = \left( 1 + \frac{\nu}{1 - 2 \nu} \right) 2 G = \\
  & = \frac{1-2\nu+\nu}{1-2\nu} 2 G = \\
  & = \frac{1 - \nu}{1 - 2 \nu} 2 G = \\
  & = \frac{1 - \nu}{(1+\nu)(1-2\nu)} E
\end{aligned}$$

---

$$\begin{aligned}
  \sigma_{xx}
  & = 2 G \varepsilon_{xx} + \lambda ( \varepsilon_{xx} + \varepsilon_{yy} + \varepsilon_{zz} ) = \\
\end{aligned}$$

```

(solid-mechanics:small-displacements:plates-shells:stress-strain-state:planar-strain)=
## Planar strain

Let $x$, $y$ the in-plane coordinates. Then the planar strain assumption implies $\varepsilon_{zx} = \varepsilon_{zy} = \varepsilon_{zz} = 0$. Thus, the constitutive law for a linear elastic isotropic medium reads

$$
\begin{bmatrix} \sigma_{xx} \\ \sigma_{yy} \\ \sigma_{xy} \end{bmatrix}
= 
\frac{E}{(1+\nu)(1-2\nu)}
\begin{bmatrix} 1-\nu & \nu & \cdot \\ \nu & 1-\nu & \cdot \\ \cdot & \cdot & 1-2\nu  \end{bmatrix}
\begin{bmatrix} \varepsilon_{xx} \\ \varepsilon_{yy} \\ \varepsilon_{xy} \end{bmatrix}
$$

$$
\begin{bmatrix} \sigma_{zz} \\ \sigma_{zx} \\ \sigma_{zy} \end{bmatrix}
=
\begin{bmatrix} \frac{\nu E}{(1+\nu)(1-2\nu)} ( \varepsilon_{xx} + \varepsilon_{yy}) \\ 0 \\ 0 \end{bmatrix}
$$

$$
\begin{bmatrix} \varepsilon_{xx} \\ \varepsilon_{yy} \\ \varepsilon_{xy} \end{bmatrix}
= 
\frac{1+\nu}{E}
\begin{bmatrix} 1-\nu & -\nu & \cdot \\ -\nu & 1-\nu & \cdot \\ \cdot & \cdot & 1 \end{bmatrix}
\begin{bmatrix} \sigma_{xx} \\ \sigma_{yy} \\ \sigma_{xy} \end{bmatrix}
$$


```{dropdown} Details

$$
\begin{bmatrix} 1-\nu & \nu & \cdot \\ \nu & 1-\nu & \cdot \\ \cdot & \cdot & 1-2\nu  \end{bmatrix}^{-1} =
\begin{bmatrix}
  \frac{1-\nu}{1-2\nu} & \frac{ -\nu}{1-2\nu} & \cdot \\
  \frac{ -\nu}{1-2\nu} & \frac{1-\nu}{1-2\nu} & \cdot \\ 
  \cdot & \cdot & \frac{1}{1-2\nu}
\end{bmatrix}
$$

being $(1-\nu)^2 - \nu^2 = 1-2\nu$, and

$$\begin{bmatrix} 1-\nu & \nu \\ \nu & 1-\nu \end{bmatrix}^{-1} = \frac{1}{1-2\nu} \begin{bmatrix} 1-\nu & -\nu \\ -\nu & 1-\nu \end{bmatrix}$$



```


(solid-mechanics:small-displacements:plates-shells:stress-strain-state:planar-stress)=
## Planar stress

Let $x$, $y$ the in-plane coordinates. Then the planar stress assumption implies $\sigma_{zx} = \sigma_{zy} = \sigma_{zz} = 0$.

$$
\begin{bmatrix} \varepsilon_{xx} \\ \varepsilon_{yy} \\ \varepsilon_{xy} \end{bmatrix}
=
\begin{bmatrix}
 \frac{ 1 }{E} &-\frac{\nu}{E} & \cdot \\
-\frac{\nu}{E} & \frac{ 1 }{E} & \cdot \\
 \cdot & \cdot &         \frac{1+\nu}{E} \\
\end{bmatrix}
\begin{bmatrix} \sigma_{xx} \\ \sigma_{yy} \\ \sigma_{xy} \end{bmatrix}
$$

$$
\begin{bmatrix} \varepsilon_{zz} \\ \varepsilon_{zx} \\ \varepsilon_{zy} \end{bmatrix}
=
\begin{bmatrix} - \frac{\nu}{E} ( \sigma_{xx} + \sigma_{yy} ) \\ 0 \\ 0 \end{bmatrix}
$$

$$
\begin{bmatrix} \sigma_{xx} \\ \sigma_{yy} \\ \sigma_{xy} \end{bmatrix}
=
E
\begin{bmatrix}
 \frac{  1}{1-\nu^2} & \frac{\nu}{1-\nu^2} & \cdot \\
 \frac{\nu}{1-\nu^2} & \frac{  1}{1-\nu^2} & \cdot \\
 \cdot & \cdot &         \frac{1}{1+\nu} \\
\end{bmatrix}
\begin{bmatrix} \varepsilon_{xx} \\ \varepsilon_{yy} \\ \varepsilon_{xy} \end{bmatrix}
$$
