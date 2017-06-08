/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1452Component } from './comp-1452.component';

describe('Comp1452Component', () => {
  let component: Comp1452Component;
  let fixture: ComponentFixture<Comp1452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
