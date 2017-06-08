/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1523Component } from './comp-1523.component';

describe('Comp1523Component', () => {
  let component: Comp1523Component;
  let fixture: ComponentFixture<Comp1523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
