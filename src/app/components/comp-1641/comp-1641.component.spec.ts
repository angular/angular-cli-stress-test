/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1641Component } from './comp-1641.component';

describe('Comp1641Component', () => {
  let component: Comp1641Component;
  let fixture: ComponentFixture<Comp1641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
