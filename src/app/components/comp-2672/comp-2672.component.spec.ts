/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2672Component } from './comp-2672.component';

describe('Comp2672Component', () => {
  let component: Comp2672Component;
  let fixture: ComponentFixture<Comp2672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
