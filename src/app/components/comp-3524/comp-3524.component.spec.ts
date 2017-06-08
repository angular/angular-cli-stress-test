/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3524Component } from './comp-3524.component';

describe('Comp3524Component', () => {
  let component: Comp3524Component;
  let fixture: ComponentFixture<Comp3524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
