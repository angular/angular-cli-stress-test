/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2849Component } from './comp-2849.component';

describe('Comp2849Component', () => {
  let component: Comp2849Component;
  let fixture: ComponentFixture<Comp2849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
