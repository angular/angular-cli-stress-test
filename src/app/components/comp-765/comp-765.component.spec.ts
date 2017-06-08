/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp765Component } from './comp-765.component';

describe('Comp765Component', () => {
  let component: Comp765Component;
  let fixture: ComponentFixture<Comp765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
