/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3676Component } from './comp-3676.component';

describe('Comp3676Component', () => {
  let component: Comp3676Component;
  let fixture: ComponentFixture<Comp3676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
