/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1873Component } from './comp-1873.component';

describe('Comp1873Component', () => {
  let component: Comp1873Component;
  let fixture: ComponentFixture<Comp1873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
