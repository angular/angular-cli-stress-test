/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2523Component } from './comp-2523.component';

describe('Comp2523Component', () => {
  let component: Comp2523Component;
  let fixture: ComponentFixture<Comp2523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
