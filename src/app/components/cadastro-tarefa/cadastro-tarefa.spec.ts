import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTarefa } from './cadastro-tarefa';

describe('CadastroTarefa', () => {
  let component: CadastroTarefa;
  let fixture: ComponentFixture<CadastroTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroTarefa],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroTarefa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
