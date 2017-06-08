/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1749Component } from './comp-1749.component';

describe('Comp1749Component', () => {
  let component: Comp1749Component;
  let fixture: ComponentFixture<Comp1749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
