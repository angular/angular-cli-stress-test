/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3375Component } from './comp-3375.component';

describe('Comp3375Component', () => {
  let component: Comp3375Component;
  let fixture: ComponentFixture<Comp3375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
