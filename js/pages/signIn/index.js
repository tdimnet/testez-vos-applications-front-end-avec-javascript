const SignIn = {
    render: () => {
        return `
            <div class="sign-in-page">
                <div class="sign-in-main-wrapper">
                    <h1 class="main-title">Façadia</h1>
                    <form class="sign-in-form" action="#" method="POST">
                        <h2 data-testid="sign-in-form-title" class="form-title">Veuillez vous connecter</h2>
                        
                        <div class="form-group">
                            <label for="user-email">Votre addresse e-mail</label>
                            <input name="user-email" id="user-email" type="email" placeholder="email@example.com">
                            <span data-testid="user-email-error-msg" class="form-text-error hidden user-email-error-msg">L'e-mail n'est pas correct</span>
                        </div>
                        <div class="form-group">
                            <label for="user-password">Votre mot de passe</label>
                            <input name="user-password" id="user-password" type="password" placeholder="mot de passe">
                            <span data-testid="user-password-error-msg" class="form-text-error hidden  user-password-error-msg">Le mot de passe n'est pas correct</span>
                        </div>
                        <div>
                            <button role="button" class="submit-btn" type="submit">
                                Se connecter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `
    }
}

export default SignIn