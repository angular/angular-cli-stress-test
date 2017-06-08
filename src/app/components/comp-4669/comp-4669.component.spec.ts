/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4669Component } from './comp-4669.component';

describe('Comp4669Component', () => {
  let component: Comp4669Component;
  let fixture: ComponentFixture<Comp4669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
