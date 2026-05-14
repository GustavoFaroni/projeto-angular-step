import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaProdutos } from './busca-produtos';

describe('BuscaProdutos', () => {
  let component: BuscaProdutos;
  let fixture: ComponentFixture<BuscaProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscaProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
