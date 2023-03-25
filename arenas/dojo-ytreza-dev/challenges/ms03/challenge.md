# Une seule case vide

Tu te retrouves face à une nouvelle épreuve. Cette fois-ci, Julius te demande de résoudre un champ de mines contenant une seule case vide.

> Ne sous-estime pas la difficulté de cette tâche. Même si cette épreuve peut sembler simple, il est important de maîtriser chaque étape de notre progression.

Le test que tu dois faire passer est le suivant :

```typescript
    it("should solve one empty cell", () => {
        const solved_field = minesweeper(".")
        expect(solved_field).toEqual("0")
    })
```

Le champ de mines contient une seule case vide représentée par un point "."
Dans ce champ, il n'y a pas de mines. La sortie attendue est "0", qui signifie qu'il n'y a pas de mines adjacentes à la case vide.

Tu dois maintenant écrire le code pour résoudre cette épreuve. Rappelle-toi de demander à Julius ce qu'il attend de toi. Si tu reçois une réponse négative (RED), corrige ton code et effectue un nouveau smart commit. Si tu reçois une réponse positive (GREEN), félicitations ! Tu peux passer à l'épreuve suivante.

N'oublie pas de rester simple pour satisfaire Julius.