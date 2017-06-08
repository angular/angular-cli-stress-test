/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1488Component } from './comp-1488.component';

describe('Comp1488Component', () => {
  let component: Comp1488Component;
  let fixture: ComponentFixture<Comp1488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
