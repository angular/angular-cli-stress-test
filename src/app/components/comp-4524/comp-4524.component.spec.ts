/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4524Component } from './comp-4524.component';

describe('Comp4524Component', () => {
  let component: Comp4524Component;
  let fixture: ComponentFixture<Comp4524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
