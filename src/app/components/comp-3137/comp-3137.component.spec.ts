/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3137Component } from './comp-3137.component';

describe('Comp3137Component', () => {
  let component: Comp3137Component;
  let fixture: ComponentFixture<Comp3137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
