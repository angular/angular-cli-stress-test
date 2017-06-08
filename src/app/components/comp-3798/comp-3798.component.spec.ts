/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3798Component } from './comp-3798.component';

describe('Comp3798Component', () => {
  let component: Comp3798Component;
  let fixture: ComponentFixture<Comp3798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
