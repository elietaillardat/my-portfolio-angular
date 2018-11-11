import { Subject } from 'rxjs';

export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
    }

    switchOnOne(i : number) {
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();
    }

    switchOffOne(i : number) {
        this.appareils[i].status = 'éteint';
        this.emitAppareilSubject();
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            }
        );
        return appareil;
    }

    private appareils = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Frigo',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];
}