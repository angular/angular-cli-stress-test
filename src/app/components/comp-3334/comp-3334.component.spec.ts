/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3334Component } from './comp-3334.component';

describe('Comp3334Component', () => {
  let component: Comp3334Component;
  let fixture: ComponentFixture<Comp3334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
