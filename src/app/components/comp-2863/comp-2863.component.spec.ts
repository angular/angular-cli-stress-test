/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2863Component } from './comp-2863.component';

describe('Comp2863Component', () => {
  let component: Comp2863Component;
  let fixture: ComponentFixture<Comp2863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
