/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1451Component } from './comp-1451.component';

describe('Comp1451Component', () => {
  let component: Comp1451Component;
  let fixture: ComponentFixture<Comp1451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
