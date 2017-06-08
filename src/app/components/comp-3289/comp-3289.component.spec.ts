/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3289Component } from './comp-3289.component';

describe('Comp3289Component', () => {
  let component: Comp3289Component;
  let fixture: ComponentFixture<Comp3289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
