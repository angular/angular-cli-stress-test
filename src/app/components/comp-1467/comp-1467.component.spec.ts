/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1467Component } from './comp-1467.component';

describe('Comp1467Component', () => {
  let component: Comp1467Component;
  let fixture: ComponentFixture<Comp1467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
