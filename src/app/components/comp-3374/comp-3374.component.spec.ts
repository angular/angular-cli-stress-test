/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3374Component } from './comp-3374.component';

describe('Comp3374Component', () => {
  let component: Comp3374Component;
  let fixture: ComponentFixture<Comp3374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
