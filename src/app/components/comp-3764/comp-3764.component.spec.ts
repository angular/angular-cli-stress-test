/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3764Component } from './comp-3764.component';

describe('Comp3764Component', () => {
  let component: Comp3764Component;
  let fixture: ComponentFixture<Comp3764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
