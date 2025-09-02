(solid-mechanics:intro:small-displacements:damping)=
# Structural damping

As a first approximation, a large number of structures can be treated as undamped structures that, if constrained so that there's no rigid motion allowed, can be represented by the second order system

$$\mathbf{M} \ddot{\mathbf{x}} + \mathbf{K} \mathbf{x} = \mathbf{f} \ ,$$

being mass and stiffness matrices $\mathbf{M}$, $\mathbf{K}$ that are positive definite, and symmetric if derived as an example from a Lagrangian formulation of the problem.

**todo** Add reference to Lagrange mechanics and its properties in the classical mechanics bbooks.

This kind of systems are conveniently described using **modal basis**, as modes (or free/natural modes of vibrations) are orthogonal w.r.t. both mass and stiffness matrix.

**todo** Add reference; add comment: diagonal, or diagonalizable with coincident eigenvectors.

**Free response** using modal basis


## Small damping

Structural small damping can be treated as a first order perturbation of the undamped system,

$$\mathbf{M} \ddot{\mathbf{u}} + \mathbf{C} \dot{\mathbf{u}} + \mathbf{K} \mathbf{u} = \mathbf{f} \ ,$$

or in Laplace domain

$$\left[ s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u} = \mathbf{f} \ .$$

Here two assumptions are made and justified later:
- matrix $\mathbf{C}$ is (semi)positive symmetric
- matrix $\mathbf{C}$ becomes diagonal in the modal basis, i.e. modal basis simoultaneously diagonalize mass, damping and stiffness matrices

If these two assumption holds, using the modal base collected in matrix $\mathbf{U}$,

$$\mathbf{u} = \mathbf{U} \mathbf{q} \ ,$$

the diagonalization reads

$$\begin{aligned}
\mathbf{U}^T \mathbf{f}
& = \mathbf{U}^T \left\{ \mathbf{M} \mathbf{U} \ddot{\mathbf{q}} + \mathbf{C} \mathbf{U} \dot{\mathbf{q}} + \mathbf{K} \mathbf{U} \mathbf{q} \right\} = \\
& = \text{diag} \{ m_i \} \ddot{\mathbf{q}} + \text{diag}\{ c_i \} \dot{\mathbf{q}} + \text{diag}\{ k_i \} \mathbf{q} = \\
& = \text{diag} \{ m_i \ddot{q}_i + c_i \dot{q}_i + k_i q_i \} \ .
\end{aligned}$$

being $m_i := \mathbf{u}_i^T \mathbf{M} \mathbf{u}_i$, $c_i := \mathbf{u}_i^T \mathbf{C} \mathbf{u}_i$, $k_i := \mathbf{u}_i^T \mathbf{K} \mathbf{u}_i$, the modal mass, damping and stiffness.

```{dropdown} (Semi)definite positive damping matrix
:open:

Starting from the equations of motion

$$\mathbf{M} \ddot{\mathbf{u}} + \mathbf{C} \dot{\mathbf{u}} + \mathbf{K} \mathbf{u} = \mathbf{f} \ ,$$

the kinetic energy and the mechanical energy balance is derived (**todo** add references) with scalar multiplication by $\dot{\mathbf{u}}$. For constant matrices,

$$\begin{aligned}
 \dot{\mathbf{u}}^T \mathbf{M} \ddot{\mathbf{u}} + \dot{\mathbf{u}}^T \mathbf{C} \dot{\mathbf{u}} + \dot{\mathbf{u}}^T \mathbf{K} \mathbf{u} & = \dot{\mathbf{u}}^T \mathbf{f} \\
 \dfrac{d}{dt} \left[ \dfrac{1}{2} \dot{\mathbf{u}}^T \mathbf{M} \dot{\mathbf{u}} + \dfrac{1}{2} \mathbf{u}^T \mathbf{K} \mathbf{u} \right] & = \dot{\mathbf{u}}^T \mathbf{f} - \dot{\mathbf{u}}^T \mathbf{C} \dot{\mathbf{u}}  \\
 \dfrac{d}{dt} \left( K + V \right) & = \dot{\mathbf{u}}^T \mathbf{f} - \underbrace{\dot{\mathbf{u}}^T \mathbf{C} \dot{\mathbf{u}}}_{ D \ge 0} \ , \\
\end{aligned}$$

having recognized $D = \dot{\mathbf{u}}^T \mathbf{C} \dot{\mathbf{u}} \ge 0$ as the dissipation from damping, that can't make the mechanical energy of the system $K + V$ increase. This condition implies that $\mathbf{C}$ is (semi)definite positive.

```

```{dropdown} Diagonal damping in modal basis
:open:

Let's write here the perturbed free damped system in Laplace domain using modal basis,

$$\left[ s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u} = \mathbf{0} \ ,$$

and evaluate the derivative of this relation w.r.t. a parameter $p$ associated to the damping, and not influencing mass or stiffness properties, $\mathbf{M}_{/p} = \mathbf{0}$, $\mathbf{K}_{/p} = \mathbf{0}$,

$$\begin{aligned}
  \mathbf{0} 
  & = \left\{ \left[ s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u} \right\}_{/p} = \\
  & = \left[ (2 s \mathbf{M} + \mathbf{C} ) s_{/p} + s \mathbf{C}_{/p} \right] \mathbf{u}
    + \left[ s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u}_{/p} \ .
\end{aligned}$$

Let's investigate the effect of small damping on the eigensolution $\left(s_i, \mathbf{u}_i \right)$. Exploiting the symmetry of the matrices of the system (following from the assumed simultaneous diagonalization of the damping matrix $\mathbf{C} = \mathbf{U} \text{diag}\{ c_i \} \mathbf{U}^*$), and evaluating the dot product of the latter relation for the $i$-th eigensolution with the eigenvector $\mathbf{u}_i$,

$$\begin{aligned}
  0 & = \mathbf{u}_i^T \left\{ \left[ (2 s_i \mathbf{M} + \mathbf{C} ) s_{i/p} + s_i \mathbf{C}_{/p} \right] \mathbf{u}_i
      + \left[ s_i^2 \mathbf{M} + s_i \mathbf{C} + \mathbf{K} \right] \mathbf{u}_{i/p} \right\} = \\
    & = \mathbf{u}_i^T \left[ (2 s_i \mathbf{M} + \mathbf{C} ) s_{i/p} + s_i \mathbf{C}_{/p} \right] \mathbf{u}_i
      + \mathbf{u}_{i/p}^T \underbrace{\left[ s_i^2 \mathbf{M} + s_i \mathbf{C} + \mathbf{K} \right] \mathbf{u}_i}_{=\mathbf{0}} = \\
\end{aligned}$$

it follows that the derivative of the $i^{th}$ eigenvalue w.r.t. the parameter $p$ reads

$$s_{i/p} = - \dfrac{s_i \mathbf{u}_i^T \mathbf{C}_{/p} \mathbf{u}_i}{\mathbf{u}_i^T (2 s_i \mathbf{M} + \mathbf{C} ) \mathbf{u}_i} \ .$$

This derivative evaluated for the reference undamped condition $\mathbf{C} = \mathbf{0}$ becomes

$$s_{i/p} = - \dfrac{1}{2} \dfrac{\mathbf{u}_i^T \mathbf{C}_{/p} \mathbf{u}_i}{\mathbf{u}_i^T \mathbf{M} \mathbf{u}_i} = - \dfrac{1}{2} \dfrac{\mathbf{u}_i^T \mathbf{C}_{/p} \mathbf{u}_i}{m_i} \ ,$$

having recognized the modal mass $m_i := \mathbf{u}_i^T \mathbf{M} \mathbf{u}_i$ associated to the $i^{th}$ mode. Now, let's evaluate the derivative of the eigenvalue $s_i$ w.r.t. the components of the damping matrix $\mathbf{C}$, i.e. $\mathbf{C}_{/C_{jk}}$ that is a matrix full of zero, except for the component $(j,k)$ equal to one,

$$s_{i/C_{jk}} = - \dfrac{1}{2} \dfrac{\mathbf{u}_i^T \mathbf{C}_{/C_{jk}} \mathbf{u}_i}{m_i} = -\dfrac{1}{2} \dfrac{u^{(i)}_j u^{(i)}_k}{m_i} \ ,$$

and the first order polynomial expansion of $s_i$ in coefficients $C_{jk}$ reads

$$\begin{aligned}
  s_i & = s_{i,0} + s_{i/C_{jk}} C_{jk} = \\
      & = s_{i,0} - \dfrac{1}{2} \dfrac{u^{(i)}_j C_{jk} u^{(i)}_k}{m_i} = \\
      & = s_{i,0} - \dfrac{1}{2} \dfrac{\mathbf{u}_i^T \mathbf{C} \mathbf{u}_i}{m_i}
\ .
\end{aligned}$$

From this expression, it's possible to deduce that the $i^{th}$ eigenvalue of the slightly damped system differs from the $i^{th}$ eigenvalue of the undamped system $s_{i,0} = \mp j \omega_{i}$ of a real non-positive (as $\mathbf{C} \ge 0$ for dissipative damping actions) term $\Delta s_i = - \frac{1}{2} \frac{\mathbf{u}_i^T \mathbf{C} \mathbf{u}_i}{m_i} \in \mathbb{R}$, $\Delta s_i \le 0$, depending only on the damping matrix and the $i^{th}$ mode. This term shifts the eigenvalue $s_i$ to the left in the complex plane, and thus makes it asymptotically stable.

As the variation $\Delta s_i$ only depends on the $i^{th}$ eigenvector, and not on other eigenvectors, the assumption of siultaneously diagonalizable damping matrix is consistent with the results from this assumption.

```








