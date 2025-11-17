(solid-mechanics:intro:small-displacements:numerics)=
# Modal methods for structural problems

$$\mathbf{M} \ddot{\mathbf{u}} + \mathbf{K} \mathbf{u} = \mathbf{f} \ .$$

## No free rigid motion
If a structure has no free rigid motion, the stiffness matrix of mechanical systems is symmetric **definite positive**.

**Spectral decomposition of the problem.**

$$\left[ s_i^2 \mathbf{M} + \mathbf{K} \right] \hat{\mathbf{u}}_i = \mathbf{0} \ ,$$

or in index and matrix form

$$\begin{aligned}
  0 & = s_i^2 M_{jk} U_{ki} + K_{jk} U_{ki} = \\
    & = \mathbf{M} \mathbf{U} \mathbf{S}^2 + \mathbf{K} \mathbf{U} \ ,
\end{aligned}$$

with the diagonal matrix $\mathbf{S}$ collecting the eigenvalues,

$$\mathbf{S} = \text{diag} \left\{ s_i \right\} \ .$$

**Properties.** For eigenvectors with different eigenvalues,

$$\begin{aligned}
  \hat{\mathbf{u}}_j^* \mathbf{M} \hat{\mathbf{u}}_i = 0 \qquad , \qquad
  \hat{\mathbf{u}}_j^* \mathbf{K} \hat{\mathbf{u}}_i = 0 \ .
\end{aligned}$$

**Nodal and modal unknowns.** The nodal vector can be written as a combination of modes, being $\mathbf{q}$ the vector of modal amplitudes,

$$\mathbf{u} = \mathbf{U} \mathbf{q} = \left[ \hat{\mathbf{u}}_1 | \dots | \hat{\mathbf{u}}_N \right] \mathbf{q} \ .$$

**Laplace domain.** In Laplace domain 

$$\begin{aligned}
  \left[ s^2 \mathbf{U}^* \mathbf{M} \mathbf{U} + \mathbf{U}^* \mathbf{K} \mathbf{U}\right] \mathbf{q}(s) & = \mathbf{U}^* \mathbf{f}(s) \\
  \text{diag}\left[ s^2 m_i + k_i \right] \mathbf{q}(s) & = \mathbf{U}^* \mathbf{f}(s) \ .
\end{aligned}$$

**Modal damping** Adding modal damping, with simultaneous diagonalization with mass and stiffness matrices,

$$
  \text{diag}\left[ s^2 m_i + s c_i + k_i \right] \mathbf{q}(s) & = \mathbf{U}^* \mathbf{f}(s) \\
 \mathbf{q}(s) & = \text{diag}\left[ \frac{1}{m_i ( s^2 + 2 \xi_i \omega_i s + \omega^2_i )} \right]\mathbf{U}^* \mathbf{f}(s) \ .
$$

The original equation becomes

$$\left[s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u} = \mathbf{f} \ ,$$

with 

$$\begin{aligned}
  \mathbf{M} & = \mathbf{U} \text{diag}\left\{ m_i \right\} \mathbf{U}^* \\
  \mathbf{C} & = \mathbf{U} \text{diag}\left\{ c_i \right\} \mathbf{U}^* \\
  \mathbf{K} & = \mathbf{U} \text{diag}\left\{ k_i \right\} \mathbf{U}^* \\
\end{aligned}$$

and the eigenproblem reads

$$\begin{aligned}
  \mathbf{0} & = \left[ s_i^2 \mathbf{M} + s_i \mathbf{C} + \mathbf{K} \right] \hat{\mathbf{u}}_i \\
  \mathbf{0} & = \mathbf{M} \mathbf{U} \mathbf{S}^2 + \mathbf{C} \mathbf{U} \mathbf{S} + \mathbf{K} \mathbf{U} \\
\end{aligned}$$


**Nodal vector.** Nodal vector thus reads

$$\mathbf{u}(s) = \mathbf{U} \mathbf{q}(s) = \mathbf{U} \text{diag}\left[ \frac{1}{m_i ( s^2 + 2 \xi_i \omega_i s + \omega^2_i )} \right]\mathbf{U}^* \mathbf{f}(s) $$

and the internal forces usually derived from a manipulation of the term $\mathbf{K} \mathbf{u}(s)$,

$$\mathbf{K} \mathbf{u}(s) = \mathbf{K} \mathbf{U} \text{diag}\left[ \frac{1}{m_i ( s^2 + 2 \xi_i \omega_i s + \omega^2_i )} \right]\mathbf{U}^* \mathbf{f}(s) \ .$$

### Dimension reduction

Modal unknowns can usually partitioned in slow (dynamical, resolved) and fast modes (with natural frequencies well above the frequency content of the forcing, and the dynamics of the system; can be treated as static modes),

$$\mathbf{q} = \begin{bmatrix} \mathbf{q}_s \\ \mathbf{q}_f \end{bmatrix} \ ,$$

and the sum of their contributions give the nodal unknown,

$$\mathbf{u} = \mathbf{U} \mathbf{q} = \begin{bmatrix} \mathbf{U}_s & \mathbf{U}_f \end{bmatrix} \begin{bmatrix} \mathbf{q}_s \\ \mathbf{q}_f \end{bmatrix} = \mathbf{U}_s \mathbf{q}_s + \mathbf{U}_f \mathbf{q}_f \ .$$

#### Truncation and direct recovery of loads

$$\begin{aligned}
  \mathbf{u} 
  & = \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} 
    + \mathbf{U}_f \text{diag}\left[ \frac{1}{m_f ( s^2 + 2 \xi_f \omega_f s + \omega^2_f )} \right] \mathbf{U}_f^* \mathbf{f}
\end{aligned}$$

#### Mode acceleration and static recovery of fast modes

Static approximation of fast modes gives

$$\begin{aligned}
  \mathbf{u} 
  & = \mathbf{u}_s + \mathbf{u}_f = \\
  & = \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} 
    + \mathbf{U}_f \text{diag}\left[ \frac{1}{m_f ( s^2 + 2 \xi_f \omega_f s + \omega^2_f )} \right] \mathbf{U}_f^* \mathbf{f} \simeq \\
  & \simeq \mathbf{u}_s + \mathbf{u}_{f,static} = \\
  & = \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} 
    + \mathbf{U}_f \text{diag}\left[ \frac{1}{m_f \omega^2_f } \right] \mathbf{U}_f^* \mathbf{f}
\end{aligned}$$

and adding and subtracting the static response of the slow modes, with the assumption that stiffness matrix $\mathbf{K}$ is invertible (i.e. no rigid motion exists; [rigid motion](solid-mechanics:intro:small-displacements:numerics:rigid) will be treated in another section later)

$$\begin{aligned}
  \mathbf{u}
  & \simeq \mathbf{u}_s - \mathbf{u}_{s,static} + \mathbf{u}_{s,static} + \mathbf{u}_{f,static} = \\
  & = \underbrace{\mathbf{U}_s \text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f}}_{\mathbf{U}_s \mathbf{q}_s}
    - \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s \omega^2_s } \right] \mathbf{U}_s^* \mathbf{f} + \\
  & + \underbrace{\mathbf{U}_s \text{diag}\left[ \frac{1}{m_s \omega^2_s } \right] \mathbf{U}_s^* \mathbf{f}
    + \mathbf{U}_f \text{diag}\left[ \frac{1}{m_f \omega^2_f } \right] \mathbf{U}_f^* \mathbf{f}}_{= \mathbf{U} \text{diag}\left[ \dfrac{1}{k_i} \right] \mathbf{U}^* \mathbf{f} = \mathbf{K}^{-1} \mathbf{f}} = \\
  & = \mathbf{U}_s \text{diag}\left[ \frac{-s^2- 2 \xi_s \omega_s s}{m_s \omega_s^2 ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} + \mathbf{K}^{-1} \mathbf{f} \ .
\end{aligned}$$

The internal stress/actions are represente here as

$$\begin{aligned}
 \mathbf{K} \mathbf{u} 
  & = \mathbf{K} \left( \mathbf{U}_s \text{diag}\left[ \frac{-s^2- 2 \xi_s \omega_s s}{m_s \omega_s^2 ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} + \mathbf{K}^{-1} \mathbf{f} \right) \\
  & = \mathbf{M} \mathbf{U}_s \text{diag}\left[ \frac{-s^2- 2 \xi_s \omega_s s}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} + \mathbf{f}\\
\end{aligned}$$

**State space system.** 

$$\begin{aligned}
  \begin{bmatrix} \mathbf{u} \\ \mathbf{K} \mathbf{u} \\ \dot{\mathbf{u}}_s \\ \ddot{\mathbf{u}}_s \end{bmatrix} 
  = \begin{bmatrix} \mathbf{U}_s & \mathbf{0} \\ \mathbf{K} \mathbf{U}_s  &  \mathbf{0} \\ \mathbf{0} & \mathbf{U}_s \\ -\text{diag}\{ \omega^2_s \} & -\text{diag}\{ 2 \xi_s \omega_s \}  \end{bmatrix} \begin{bmatrix} \mathbf{q}_s \\ \dot{\mathbf{q}}_s  \end{bmatrix} + \begin{bmatrix} \mathbf{K}^{-1} - \mathbf{U}_s \text{diag}\{ (m_s \omega_s^2)^{-1} \} \mathbf{U}^*_s \\ \mathbf{I} - \mathbf{M} \mathbf{U}_s \text{diag}\{ m_s^{-1} \} \mathbf{U}^*_s \\ \mathbf{0} \\ \text{diag}\{ m_s^{-1} \} \mathbf{U}_s^T \end{bmatrix} \mathbf{f} \ .
\end{aligned}$$

having used the identity (proved below, under negligible damping assumption) $\mathbf{K} \mathbf{U}_s = \mathbf{M} \mathbf{U}_s \text{diag}\{\omega_i^2\}$.

**Convergence.** For $s = j\omega$, and $\omega \gg \omega_0$ the leading term in the displacement goes as $-\frac{1}{m_i \omega_i^2}$, and the stress with \frac{}{}; for $\omega \ll \omega_0$ the leading term goes as $-2 \frac{\xi_i \omega}{m_i \omega_i^3}$ if the damping is not negligible, as $-\frac{\omega^2}{m_i \omega_i^4}$ if the damping is negligible.

**todo** Choose one expression to comment (and motivate the choice)



```{dropdown} $\mathbf{K}^{-1}$
:open:

The diagonal stiffness matrix using the modal basis (the basis needs to be complete, otherwise this is just a projection onto a lower-dimensional space and the equality of the two expressions of $\mathbf{u}$ doesn't hold) reads

$$\text{diag}\left\{ k_i \right\} = \mathbf{U}_i^* \mathbf{K} \mathbf{U}_i \ .$$

The static solution of the problem $\mathbf{K} \mathbf{u} = \mathbf{f}$, may be recast in modal basis as $\text{diag}\{ k_i \} \mathbf{q}_i = \mathbf{U}_i^* \mathbf{f}$, having introduced the amplitudes of the modes $\mathbf{q}_i$, defined by the change of coordinates $\mathbf{u} = \mathbf{U}_i \mathbf{q}_i$. Now, under the assumption of invertible stiffness matrix, the solution reads

$$\mathbf{q}_i = \text{diag}\left\{ \dfrac{1}{k_i} \right\} \mathbf{U}_i^* \mathbf{f} \ .$$

From the comparison of two expressions of the displacement $\mathbf{u}$

$$\begin{aligned}
  \mathbf{u} & = \mathbf{K}^{-1} \mathbf{f} = \\
             & = \mathbf{U}_i \mathbf{q}_i = \mathbf{U}_i \text{diag} \left\{ \dfrac{1}{k_i} \right\} \mathbf{U}_i^* \mathbf{f} \ ,
\end{aligned}$$

from the arbitrariety of $\mathbf{f}$ (is this condition enough?), it follows that

$$\mathbf{K}^{-1} = \mathbf{U}_i \text{diag} \left\{ \dfrac{1}{k_i} \right\} \mathbf{U}_i^* \ .$$



```

```{dropdown} Some proofs/identities of the modal basis
:open:

As the modal problem reads $\mathbf{M} \mathbf{U}_i \text{diag}\{ s^2_i \} + \mathbf{C} \mathbf{U}_i \text{diag}\{ s_i \} + \mathbf{K} \mathbf{U}_i = \mathbf{0}$, it immediately follows that

$$\mathbf{K} \mathbf{U}_i = - \mathbf{M} \mathbf{U}_i \text{diag}\{ s_i^2 \} - \mathbf{C} \mathbf{U}_i \text{diag}\{ s_i \} \ .$$

Let the system be under-critically dumped so that eigenvalues can be written as $s_i = \sigma_i + j \hat{\omega}_i = \omega_i \left( - \xi_i \mp j \sqrt{ 1 - \xi^2_i } \right)$. Then, the latter expression can be recast as 

$$\begin{aligned}
  \mathbf{0} = \mathbf{M} \mathbf{U}_i \text{diag}\left\{ \omega^2_i \left( 2 \xi_i^2 - 1 \pm j \, 2 \xi_i \sqrt{ 1 - \xi^2_i } \right) \right\} + \mathbf{C} \mathbf{U}_i \text{diag}\left\{ -\xi_i \omega_i \mp j \omega_i \sqrt{ 1 - \xi^2 } \right\} + \mathbf{K} \mathbf{U}_i \ , 
\end{aligned}$$

and its real and imaginary parts (is $\mathbf{U}_i$ real, even with non-zero damping?) read

$$\begin{aligned}
  \text{real: } \ & \mathbf{0} = \mathbf{M} \mathbf{U}_i \text{diag} \left\{ \omega_i^2 \left( 2 \xi_i^2 - 1 \right) \right\} - \mathbf{C} \mathbf{U}_i \text{diag}\left\{ \xi_i \omega_i  \right\} + \mathbf{K} \mathbf{U}_i  \\
  \text{imag: } \ & \mathbf{0} = \pm  \mathbf{M} \mathbf{U}_i \text{diag}\left\{ 2 \xi_i \omega_i^2 \right\} \mp \mathbf{C} \mathbf{U}_i \text{diag}\left\{ \omega_i \right\} \\
\end{aligned}$$

and thus

$$\begin{aligned}
  \mathbf{C} \mathbf{U}_i & = \mathbf{M} \mathbf{U}_i \text{diag} \left\{ 2 \xi_i \omega_i \right\} \\
  \mathbf{K} \mathbf{U}_i & = \mathbf{M} \mathbf{U}_i \text{diag} \left\{ \omega_i^2 \right\}
\end{aligned}$$

<!--
Under the assumption of negligible damping, $\mathbf{C} \simeq \mathbf{0}$ and $s^2_i = -\omega_i^2$, and thus

$$\mathbf{K} \mathbf{U}_i = \mathbf{M} \mathbf{U}_i \text{diag}\{ \omega_i^2 \} \ .$$
-->

```

<!--
A state-space representation of the structural problem using mode acceleration thus requires the integration in time of the slow modes

$$m_s \ddot{q}_s + c_s \dot{q}_s + k_s q_s = \mathbf{u}_s^* \mathbf{f} \ ,$$

supplied with proper initial conditions, and the recovery of physical displacements and internal forces (here represented by $\mathbf{K} \mathbf{u}$) with the output

$$\begin{aligned}
  \begin{bmatrix}  \end{bmatrix} = 
\end{aligned}$$
-->



<!--
  & = \mathbf{U}_s \text{diag}\left[ \frac{-s^2 -2 \xi_s \omega_s s}{m_s \omega^2_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} 
    + \mathbf{U} \text{diag}\left[ \frac{1}{m_i \omega^2_i } \right] \mathbf{U}^* \mathbf{f} + \\
  & = \mathbf{U}_s \text{diag}\left[ \frac{-s^2 -2 \xi_s \omega_s s}{m_s \omega^2_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f}
    + \mathbf{K}^{-1} \mathbf{f} \\
  & = 
  & = - \mathbf{U}_s \left( \mathbf{U}_s^* \mathbf{K} \mathbf{U}_s \right)^{-1} \left(  \right) \text{diag} \left[ \frac{1}{m_s (s^2 + 2 \xi_s \omega_s s + \omega^2_s) } \right] \mathbf{U}_s^* \mathbf{f} -  \mathbf{K}^{-1} \mathbf{f} \ .
-->


<!--
```{dropdown}
:open:

$$\begin{aligned}
 & \mathbf{U}_s \text{diag}\left[ \frac{-s^2 -2 \xi_s \omega_s s}{m_s \omega^2_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f}  = \\
 & = \mathbf{U}_s \text{diag}\left[ \frac{1}{k_s} \right] \text{diag}\left[ m_s ( s^2 + 2  \xi_s \omega_s s ) \right]\text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s) } \right] \mathbf{U}_s^* \mathbf{f} = \\
\end{aligned}$$

...**todo**...

```
-->

(solid-mechanics:intro:small-displacements:numerics:rigid)=
## With free rigid motion
Free rigid degrees of freedom are associated with vectors of the kernel of the stiffness matrix. Rigid motion is associated with no structural stiffness and damping, i.e. no elastic and linear damping actions occur in a structure performing a rigid motion. Then, damping and stiffness matrices are singular.

```{dropdown} Mathematical consequences of rigid modes
:open:

Deformable modes have non-zero eigenvalues $s_d$. Thus, the eigenvalue problem reads

$$\mathbf{0} = \mathbf{M} \mathbf{U}_d \mathbf{S}^2_d + \mathbf{C} \mathbf{U}_d \mathbf{S}_d + \mathbf{K} \mathbf{U}_d \ ,$$

with $\mathbf{S}_d = \text{diag}\left\{ s_d \right\}$. Rigid modes have zero eigenbalues $s_r = 0$, and thus it follows

$$\begin{aligned}
  \mathbf{0} & = \mathbf{K} \mathbf{U}_r \\
  \mathbf{0} & = \mathbf{C} \mathbf{U}_r \ .
\end{aligned}$$

If damping and stiffenss matrices are symmetric, projecting the eigenvalue problem for deformable modes onto the subspace of rigid modes it immediately follows that

$$\mathbf{0} = \mathbf{U}_r^* \mathbf{M} \mathbf{U}_d \ .$$

```

It's possible to divide the modes of the system in two sets: rigid modes, $r$, and deformable modes, $d$,

$$\mathbf{u} = \mathbf{U} \mathbf{q} = \begin{bmatrix} \mathbf{U}_r & \mathbf{U}_d \end{bmatrix} \begin{bmatrix} \mathbf{q}_r \\ \mathbf{q}_d \end{bmatrix} \ .$$

Projection of the equations of motion on the modes gives

$$\mathbf{0} = \begin{bmatrix} \mathbf{U}_r^* \\ \mathbf{U}_d^* \end{bmatrix} \left( \mathbf{M} \ddot{\mathbf{u}} + \mathbf{C} \dot{\mathbf{u}} + \mathbf{K} \mathbf{u} - \mathbf{f}  \right) \ ,$$

and exploiting orthogonality of the deformable modes $\mathbf{U}_d^* \mathbf{M} \mathbf{U}_d = \text{diag}\left\{ m_d \right\}$, and the mathematical consequences of the definition of rigid modes, namely $\mathbf{K} \mathbf{U}_r = \mathbf{0}$, $\mathbf{C} \mathbf{U}_r = \mathbf{0}$, and $\mathbf{U}_r^* \mathbf{M} \mathbf{U}_d = \mathbf{0}$ the dynamical equations of rigid and deformable d.o.f.s read

$$
\begin{bmatrix} \mathbf{U}_r^* \mathbf{M} \mathbf{U}_r & \mathbf{0} \\ \mathbf{0} & \mathbf{U}_d^* \mathbf{M} \mathbf{U}_d \end{bmatrix} \begin{bmatrix} \ddot{\mathbf{q}}_r \\ \ddot{\mathbf{q}}_d \end{bmatrix} + 
\begin{bmatrix} \mathbf{0}                             & \mathbf{0} \\ \mathbf{0} & \mathbf{U}_d^* \mathbf{C} \mathbf{U}_d \end{bmatrix} \begin{bmatrix} \ddot{\mathbf{q}}_r \\ \ddot{\mathbf{q}}_d \end{bmatrix} + 
\begin{bmatrix} \mathbf{0}                             & \mathbf{0} \\ \mathbf{0} & \mathbf{U}_d^* \mathbf{K} \mathbf{U}_d \end{bmatrix} \begin{bmatrix} \ddot{\mathbf{q}}_r \\ \ddot{\mathbf{q}}_d \end{bmatrix} + 
= \begin{bmatrix} \mathbf{U}_r^* \mathbf{f} \\ \mathbf{U}_d^* \mathbf{f} \end{bmatrix}$$

or

$$\begin{cases}
  \mathbf{U}^*_r \mathbf{f} = \mathbf{M}_r \ddot{\mathbf{q}}_r \\
  \mathbf{U}^*_d \mathbf{f} = \text{diag}\left\{ m_d \right\} \ddot{\mathbf{q}}_d + \text{diag}\left\{ c_d \right\} \dot{\mathbf{q}}_d + \text{diag}\left\{ k_d \right\} \mathbf{q}_d \\
\end{cases}$$

...


