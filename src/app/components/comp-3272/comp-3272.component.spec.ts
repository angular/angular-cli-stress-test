/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3272Component } from './comp-3272.component';

describe('Comp3272Component', () => {
  let component: Comp3272Component;
  let fixture: ComponentFixture<Comp3272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
