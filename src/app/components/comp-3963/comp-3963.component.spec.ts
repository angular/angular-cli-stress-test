/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3963Component } from './comp-3963.component';

describe('Comp3963Component', () => {
  let component: Comp3963Component;
  let fixture: ComponentFixture<Comp3963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
