/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1468Component } from './comp-1468.component';

describe('Comp1468Component', () => {
  let component: Comp1468Component;
  let fixture: ComponentFixture<Comp1468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
