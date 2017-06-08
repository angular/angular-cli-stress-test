/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp863Component } from './comp-863.component';

describe('Comp863Component', () => {
  let component: Comp863Component;
  let fixture: ComponentFixture<Comp863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
