/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3964Component } from './comp-3964.component';

describe('Comp3964Component', () => {
  let component: Comp3964Component;
  let fixture: ComponentFixture<Comp3964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
