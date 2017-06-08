/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2057Component } from './comp-2057.component';

describe('Comp2057Component', () => {
  let component: Comp2057Component;
  let fixture: ComponentFixture<Comp2057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
