/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1647Component } from './comp-1647.component';

describe('Comp1647Component', () => {
  let component: Comp1647Component;
  let fixture: ComponentFixture<Comp1647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
