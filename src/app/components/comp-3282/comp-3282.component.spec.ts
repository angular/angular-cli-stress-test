/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3282Component } from './comp-3282.component';

describe('Comp3282Component', () => {
  let component: Comp3282Component;
  let fixture: ComponentFixture<Comp3282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
