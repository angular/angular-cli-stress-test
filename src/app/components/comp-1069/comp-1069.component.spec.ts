/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1069Component } from './comp-1069.component';

describe('Comp1069Component', () => {
  let component: Comp1069Component;
  let fixture: ComponentFixture<Comp1069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
