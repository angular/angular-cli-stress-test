/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3161Component } from './comp-3161.component';

describe('Comp3161Component', () => {
  let component: Comp3161Component;
  let fixture: ComponentFixture<Comp3161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
