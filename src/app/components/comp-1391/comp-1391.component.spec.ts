/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1391Component } from './comp-1391.component';

describe('Comp1391Component', () => {
  let component: Comp1391Component;
  let fixture: ComponentFixture<Comp1391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
